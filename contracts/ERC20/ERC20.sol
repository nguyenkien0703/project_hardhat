pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./extensions/IERC20Metadata.sol";
import "../utils/Context.sol";
contract ERC20 is Context, IERC20, IERC20Metadata {

    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;
    bool private _isPaused;
    address private _admin ;

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    mapping (address => bool) private minters;
    mapping (address => bool) private burners    ;


    //events 
    event Paused();
    event UnPaused();

    // modifier check role 
    modifier isAdmin(){
        require(msg.sender == _admin, "only admin can call this function");
        _;
    }
    modifier isMinter(){
        require(minters[msg.sender],"only minter can call this function");
        _;
    }
    modifier isBurner(){
        require(burners[msg.sender], "only burner can call this function");
        _;
    }

    //Initialize  supplier  token start at 0 token 
    constructor (){
        _name = "Kien_dev";
        _symbol ="intern";
        _decimals= 18;
        _totalSupply =0;
        _admin = msg.sender ;
       _isPaused = false ;
    }
   
    // token are mintable 
    function _mint (address account, uint value) external isMinter returns (bool) {
        require(account != address(0), "invalid account address");
        require(_totalSupply + value <= 1_000_000_000 * 10 **uint256(_decimals),"minting can exceed regulation ");
        _totalSupply += value;
        _balances[account ] += value;
        emit Transfer(address(0), account, value);
        return true;
    }

    //token are burnable 
    function _burn (uint value ) external isBurner returns (bool) {
        require(value <= _balances[msg.sender], "insufficient balance for burning " );
        _totalSupply -= value;
        _balances[msg.sender ] -= value;
        emit Transfer(msg.sender, address(0), value);
        return true;
    }


    function pause() external isAdmin {
        _isPaused = true ;
        emit Paused();
    }
    function unpause() external isAdmin{
        _isPaused = false;
        emit UnPaused();
    }
    // ===================implement functions of inteface IERC20, IERC20Metadata

    function name() external view virtual override returns (string memory) {
        return _name;
    }

    function symbol() external view virtual override returns (string memory) {
        return _symbol;
    }

    function decimals() external view virtual override returns (uint8) {
        return 18;
    }

    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }
    
    function balanceOf(address account) external view virtual override returns (uint256) {
        return _balances[account];
    }
    
    function transfer(address to, uint256 amount) external virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) external virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    function transferFrom(address from,address to,uint256 amount) external virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

   
    function increaseAllowance(address spender, uint256 addedValue) external virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, allowance(owner, spender) + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) external virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = allowance(owner, spender);
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
       

        return true;
    }

    function _transfer(address from,address to,uint256 amount) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

   


    function _approve(address owner,address spender,uint256 amount) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _spendAllowance(address owner,address spender,uint256 amount) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            
        }
    }

    
    function _beforeTokenTransfer(address from,address to,uint256 amount) internal virtual {}
    function _afterTokenTransfer(address from,address to,uint256 amount) internal virtual {}

}

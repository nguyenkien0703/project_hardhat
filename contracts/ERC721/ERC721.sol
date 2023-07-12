pragma solidity ^0.8.0;
import "./IERC721.sol";
import "./IERC721Receiver.sol";
import "./extensions/IERC721Metadata.sol";
import "../utils/Context.sol";
import "../utils/ERC165.sol";
contract CreateErc721 is Context, ERC165, IERC721, IERC721Metadata{
    string private _name ;
    string private _symbol ;
    uint private _totalTokens;
    uint256 private _price;

    address private _seller;

    bool private _isTransfer;

    address public market;
    
    mapping(uint256 => address) private _owners;
    mapping(address => uint256[]) private _ownedTokens;
    mapping(address => uint256) private _balances;
    mapping(uint256 => address) private _tokenApprovals;
    // mapping (uint => string ) private _tokenURIs;
   string private _base_uri ="https://www.google.com/search?q=";
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    constructor(string memory name_ , string memory symbol_) {
        _name  = name_ ;
        _symbol = symbol_;
        _totalTokens = 0;
    }

    // token are mintable 
    function _mint(address to ) external returns (uint){
        uint tokenId =  _totalTokens + 1 ;
        _owners[tokenId] = to;
        _ownedTokens[to].push(tokenId);
        _totalTokens++;
        return tokenId;
    }

    function tokenURI(uint256 tokenId) external view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        string memory baseURI = _baseURI();
        return string(abi.encodePacked(baseURI, uint2str(tokenId)));
    }

    //convert a number => string 
    function uint2str(uint value ) internal pure returns (string memory){
        if(value == 0){
            return "0";
        }
        uint cur_val = value;
        uint cnt=0;
        while(cur_val !=0){
            ++cnt ;
            cur_val/=10;
        }
        bytes memory buffer =  new bytes(cnt );
        while(value != 0 ){
            cnt -=1 ;
            buffer[cnt] = bytes1(uint8(48 + uint(value % 10 )));
            value/=10;
        }
        return string (buffer);
    }

// ============implement functions of interface 

    modifier onlyMarket() {
        require(msg.sender == market, "MARKETPLACE: FORBIDDEN");
        _;
    }

    modifier onlySeller() {
        require(msg.sender == _seller, "SELLER: FORBIDDEN");
        _;
    }
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool)
    {
        return interfaceId == type(IERC721).interfaceId || interfaceId == type(IERC721Metadata).interfaceId || super.supportsInterface(interfaceId);
    }

    function balanceOf(address owner)  public view virtual  override returns (uint256)  {
        require(
            owner != address(0),
            "ERC721: balance query for the zero address"
        );
        return _balances[owner];
    }
    function _baseURI() internal view virtual returns (string memory) {
        return _base_uri;
    }

    function ownerOf(uint tokenId) public view virtual override returns (address ){
        address owner = _owners[tokenId];
        require(
            owner != address(0),
            "ERC721: owner query for nonexistent token"
        );
        return owner;
    }

     function name() public view virtual override returns (string memory) {
        return _name;
    }

    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

   
    
    function approve(address to, uint256 tokenId) external virtual override {
        address owner = CreateErc721.ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(
            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _approve(to, tokenId);
    }


    function getApproved(uint256 tokenId) public view virtual  override returns (address) {
        require(
            _exists(tokenId),
            "ERC721: approved query for nonexistent token"
        );

        return _tokenApprovals[tokenId];
    }
    function setApprovalForAll(address operator, bool approved) external virtual override {
        _setApprovalForAll(_msgSender(), operator, approved);
    }
    function isApprovedForAll(address owner, address operator)  public view virtual override returns (bool) {
        return _operatorApprovals[owner][operator];
    }
    
    function transferFrom( address from, address to, uint256 tokenId ) external virtual override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom( address from,  address to, uint256 tokenId ) external virtual override {
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom( address from, address to,  uint256 tokenId, bytes memory _data  ) public virtual override {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        _safeTransfer(from, to, tokenId, _data);
    }


    function _safeTransfer( address from, address to, uint256 tokenId,  bytes memory _data ) internal virtual {
        _transfer(from, to, tokenId);
        require(
            _checkOnERC721Received(from, to, tokenId, _data),
            "ERC721: transfer to non ERC721Receiver implementer"
        );
    }
    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _owners[tokenId] != address(0);
    }
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view  virtual  returns (bool)  {
        require(
            _exists(tokenId),
            "ERC721: operator query for nonexistent token"
        );
        address owner = CreateErc721.ownerOf(tokenId);
        return (spender == owner || isApprovedForAll(owner, spender) || getApproved(tokenId) == spender);
    }

    function _transfer( address from, address to, uint256 tokenId ) internal virtual {
        require(_isTransfer, "ExmentNFT: cannot transfer");
        require(
            CreateErc721.ownerOf(tokenId) == from,
            "ERC721: transfer from incorrect owner"
        );
        require(to != address(0), "ERC721: transfer to the zero address");

        _beforeTokenTransfer(from, to, tokenId);

        // Clear approvals from the previous owner
        _approve(address(0), tokenId);

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);

        _afterTokenTransfer(from, to, tokenId);
    }
     function _approve(address to, uint256 tokenId) internal virtual {
        require(_isTransfer, "ExmentNFT: cannot approve");
        _tokenApprovals[tokenId] = to;
        emit Approval(CreateErc721.ownerOf(tokenId), to, tokenId);
    }
    function _setApprovalForAll( address owner, address operator, bool approved ) internal virtual {
        require(_isTransfer, "ExmentNFT: cannot approve");
        require(owner != operator, "ERC721: approve to caller");
        _operatorApprovals[owner][operator] = approved;
        emit ApprovalForAll(owner, operator, approved);
    }

    function _checkOnERC721Received( address from, address to, uint256 tokenId, bytes memory _data ) private returns (bool) {
        if (to.isContract()) {
            try
                IERC721Receiver(to).onERC721Received(
                    _msgSender(),
                    from,
                    tokenId,
                    _data
                )
            returns (bytes4 retval) {
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert(
                        "ERC721: transfer to non ERC721Receiver implementer"
                    );
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }
    function _beforeTokenTransfer( address from, address to, uint256 tokenId ) internal virtual {}
    function _afterTokenTransfer( address from, address to, uint256 tokenId ) internal virtual {}



}
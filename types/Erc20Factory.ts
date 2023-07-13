/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Erc20 } from "./Erc20";

export class Erc20Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<Erc20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<Erc20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): Erc20 {
    return super.attach(address) as Erc20;
  }
  connect(signer: Signer): Erc20Factory {
    return super.connect(signer) as Erc20Factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Erc20 {
    return new Contract(address, _abi, signerOrProvider) as Erc20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "UnPaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ebd38038062000ebd8339810160408190526200003491620001d9565b81516200004990600090602085019062000088565b5080516200005f90600190602084019062000088565b505060006003555060048054610100600160a81b03191633610100021760ff1916905562000293565b828054620000969062000240565b90600052602060002090601f016020900481019282620000ba576000855562000105565b82601f10620000d557805160ff191683800117855562000105565b8280016001018555821562000105579182015b8281111562000105578251825591602001919060010190620000e8565b506200011392915062000117565b5090565b5b8082111562000113576000815560010162000118565b600082601f8301126200013f578081fd5b81516001600160401b03808211156200015c576200015c6200027d565b6040516020601f8401601f19168201810183811183821017156200018457620001846200027d565b60405283825285840181018710156200019b578485fd5b8492505b83831015620001be57858301810151828401820152918201916200019f565b83831115620001cf57848185840101525b5095945050505050565b60008060408385031215620001ec578182fd5b82516001600160401b038082111562000203578384fd5b62000211868387016200012e565b9350602085015191508082111562000227578283fd5b5062000236858286016200012e565b9150509250929050565b6002810460018216806200025557607f821691505b602082108114156200027757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610c1a80620002a36000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101b5578063a457c2d7146101bd578063a9059cbb146101d0578063dd62ed3e146101e3576100ea565b806342966c681461018757806370a082311461019a5780638456cb59146101ad576100ea565b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016a5780633f4ba83a1461017d576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461012d575b600080fd5b6100f76101f6565b6040516101049190610866565b60405180910390f35b61012061011b36600461081a565b610288565b604051610104919061085b565b6101356102aa565b6040516101049190610b4d565b6101206101503660046107df565b6102b0565b61015d6102de565b6040516101049190610b56565b61012061017836600461081a565b6102e3565b61018561030f565b005b610120610195366004610843565b61037c565b6101356101a836600461078c565b61045b565b610185610476565b6100f76104dd565b6101206101cb36600461081a565b6104ec565b6101206101de36600461081a565b610527565b6101356101f13660046107ad565b61053f565b60606000805461020590610b93565b80601f016020809104026020016040519081016040528092919081815260200182805461023190610b93565b801561027e5780601f106102535761010080835404028352916020019161027e565b820191906000526020600020905b81548152906001019060200180831161026157829003601f168201915b5050505050905090565b60008061029361056a565b90506102a081858561056e565b5060019392505050565b60035490565b6000806102bb61056a565b90506102c8858285610622565b6102d385858561065f565b506001949350505050565b601290565b6000806102ee61056a565b90506102a0818585610300858961053f565b61030a9190610b64565b61056e565b60045461010090046001600160a01b031633146103475760405162461bcd60e51b815260040161033e906108fc565b60405180910390fd5b6004805460ff191690556040517f472cf038e2a5f33dbaa68760dbf94ab4e159535e6580c0ac63f8202c7c6c0bb290600090a1565b3360009081526008602052604081205460ff166103ab5760405162461bcd60e51b815260040161033e906109fc565b336000908152600560205260409020548211156103da5760405162461bcd60e51b815260040161033e90610a83565b81600360008282546103ec9190610b7c565b90915550503360009081526005602052604081208054849290610410908490610b7c565b909155505060405160009033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061044a908690610b4d565b60405180910390a35060015b919050565b6001600160a01b031660009081526005602052604090205490565b60045461010090046001600160a01b031633146104a55760405162461bcd60e51b815260040161033e906108fc565b6004805460ff191660011790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a1565b60606001805461020590610b93565b6000806104f761056a565b90506000610505828661053f565b9050838110156102d35760405162461bcd60e51b815260040161033e90610b08565b60008061053261056a565b90506102a081858561065f565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166105945760405162461bcd60e51b815260040161033e90610ac4565b6001600160a01b0382166105ba5760405162461bcd60e51b815260040161033e9061093d565b6001600160a01b0380841660008181526006602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610615908590610b4d565b60405180910390a3505050565b600061062e848461053f565b9050600019811461065957818110156106595760405162461bcd60e51b815260040161033e9061097f565b50505050565b6001600160a01b0383166106855760405162461bcd60e51b815260040161033e90610a3e565b6001600160a01b0382166106ab5760405162461bcd60e51b815260040161033e906108b9565b6106b6838383610770565b6001600160a01b038316600090815260056020526040902054818110156106ef5760405162461bcd60e51b815260040161033e906109b6565b6001600160a01b03831660009081526005602052604081208054849290610717908490610b64565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107619190610b4d565b60405180910390a36106598484845b505050565b80356001600160a01b038116811461045657600080fd5b60006020828403121561079d578081fd5b6107a682610775565b9392505050565b600080604083850312156107bf578081fd5b6107c883610775565b91506107d660208401610775565b90509250929050565b6000806000606084860312156107f3578081fd5b6107fc84610775565b925061080a60208501610775565b9150604084013590509250925092565b6000806040838503121561082c578182fd5b61083583610775565b946020939093013593505050565b600060208284031215610854578081fd5b5035919050565b901515815260200190565b6000602080835283518082850152825b8181101561089257858101830151858201604001528201610876565b818111156108a35783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526021908201527f6f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f6040820152603760f91b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526022908201527f6f6e6c79206275726e65722063616e2063616c6c20746869732066756e63746960408201526137b760f11b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526021908201527f696e73756666696369656e742062616c616e636520666f72206275726e696e676040820152600160fd1b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b60008219821115610b7757610b77610bce565b500190565b600082821015610b8e57610b8e610bce565b500390565b600281046001821680610ba757607f821691505b60208210811415610bc857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220caa56d4e88dea1f86462945f16bf4c42970bed5b9daaa65e60ee104e672af3b164736f6c63430008000033";

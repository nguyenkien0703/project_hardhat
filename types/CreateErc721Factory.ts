/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CreateErc721 } from "./CreateErc721";

export class CreateErc721Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CreateErc721> {
    return super.deploy(overrides || {}) as Promise<CreateErc721>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CreateErc721 {
    return super.attach(address) as CreateErc721;
  }
  connect(signer: Signer): CreateErc721Factory {
    return super.connect(signer) as CreateErc721Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateErc721 {
    return new Contract(address, _abi, signerOrProvider) as CreateErc721;
  }
}

const _abi = [
  {
    inputs: [],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "_mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "market",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052602060808190527f68747470733a2f2f7777772e676f6f676c652e636f6d2f7365617263683f713d60a09081526200004091600a9190620000bc565b503480156200004e57600080fd5b506040805180820190915260088082526735b4b2b72fb232bb60c11b60209092019182526200008091600091620000bc565b506040805180820190915260068082526534b73a32b93760d11b6020909201918252620000b091600191620000bc565b5060006002556200019f565b828054620000ca9062000162565b90600052602060002090601f016020900481019282620000ee576000855562000139565b82601f106200010957805160ff191683800117855562000139565b8280016001018555821562000139579182015b82811115620001395782518255916020019190600101906200011c565b50620001479291506200014b565b5090565b5b808211156200014757600081556001016200014c565b6002810460018216806200017757607f821691505b602082108114156200019957634e487b7160e01b600052602260045260246000fd5b50919050565b6114a080620001af6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636352211e11610097578063a22cb46511610066578063a22cb465146101e9578063b88d4fde146101fc578063c87b56dd1461020f578063e985e9c514610222576100f5565b80636352211e146101b357806370a08231146101c657806380f55605146101d957806395d89b41146101e1576100f5565b8063095ea7b3116100d3578063095ea7b31461015857806309aa7b671461016d57806323b872dd1461018d57806342842e0e146101a0576100f5565b806301ffc9a7146100fa57806306fdde0314610123578063081812fc14610138575b600080fd5b61010d610108366004610e2a565b610235565b60405161011a9190610f26565b60405180910390f35b61012b61027d565b60405161011a9190610f31565b61014b610146366004610e62565b61030f565b60405161011a9190610ed5565b61016b610166366004610e01565b61035b565b005b61018061017b366004610c6d565b6103f3565b60405161011a919061132d565b61016b61019b366004610cc0565b610469565b61016b6101ae366004610cc0565b6104a1565b61014b6101c1366004610e62565b6104bc565b6101806101d4366004610c6d565b6104f1565b61014b610535565b61012b610544565b61016b6101f7366004610dc7565b610553565b61016b61020a366004610cfb565b610569565b61012b61021d366004610e62565b6105a8565b61010d610230366004610c8e565b61060d565b60006001600160e01b031982166380ac58cd60e01b148061026657506001600160e01b03198216635b5e139f60e01b145b8061027557506102758261063b565b90505b919050565b60606000805461028c906113a5565b80601f01602080910402602001604051908101604052809291908181526020018280546102b8906113a5565b80156103055780601f106102da57610100808354040283529160200191610305565b820191906000526020600020905b8154815290600101906020018083116102e857829003601f168201915b5050505050905090565b600061031a82610654565b61033f5760405162461bcd60e51b8152600401610336906111c9565b60405180910390fd5b506000908152600960205260409020546001600160a01b031690565b6000610366826104bc565b9050806001600160a01b0316836001600160a01b0316141561039a5760405162461bcd60e51b815260040161033690611264565b806001600160a01b03166103ac610671565b6001600160a01b031614806103c857506103c881610230610671565b6103e45760405162461bcd60e51b8152600401610336906110a2565b6103ee8383610675565b505050565b60008060025460016104059190611336565b600081815260066020908152604080832080546001600160a01b0319166001600160a01b0389169081179091558352600782528220805460018101825590835290822001829055600280549293509061045d836113e0565b90915550909392505050565b61047a610474610671565b8261070c565b6104965760405162461bcd60e51b8152600401610336906112a5565b6103ee838383610791565b6103ee83838360405180602001604052806000815250610569565b6000818152600660205260408120546001600160a01b0316806102755760405162461bcd60e51b815260040161033690611149565b60006001600160a01b0382166105195760405162461bcd60e51b8152600401610336906110ff565b506001600160a01b031660009081526008602052604090205490565b6005546001600160a01b031681565b60606001805461028c906113a5565b61056561055e610671565b83836108ed565b5050565b61057a610574610671565b8361070c565b6105965760405162461bcd60e51b8152600401610336906112a5565b6105a2848484846109b9565b50505050565b60606105b382610654565b6105cf5760405162461bcd60e51b815260040161033690611215565b60006105d96109ec565b9050806105e5846109fb565b6040516020016105f6929190610ea6565b604051602081830303815290604052915050919050565b6001600160a01b039182166000908152600b6020908152604080832093909416825291909152205460ff1690565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600660205260409020546001600160a01b0316151590565b3390565b600454600160a01b900460ff1661069e5760405162461bcd60e51b815260040161033690611192565b600081815260096020526040902080546001600160a01b0319166001600160a01b03841690811790915581906106d3826104bc565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061071782610654565b6107335760405162461bcd60e51b815260040161033690611056565b600061073e836104bc565b9050806001600160a01b0316846001600160a01b031614806107655750610765818561060d565b806107895750836001600160a01b031661077e8461030f565b6001600160a01b0316145b949350505050565b600454600160a01b900460ff166107ba5760405162461bcd60e51b8152600401610336906112f6565b826001600160a01b03166107cd826104bc565b6001600160a01b0316146107f35760405162461bcd60e51b815260040161033690610f96565b6001600160a01b0382166108195760405162461bcd60e51b815260040161033690610fdb565b6108248383836103ee565b61082f600082610675565b6001600160a01b0383166000908152600860205260408120805460019290610858908490611362565b90915550506001600160a01b0382166000908152600860205260408120805460019290610886908490611336565b909155505060008181526006602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a46103ee8383836103ee565b600454600160a01b900460ff166109165760405162461bcd60e51b815260040161033690611192565b816001600160a01b0316836001600160a01b031614156109485760405162461bcd60e51b81526004016103369061101f565b6001600160a01b038381166000818152600b602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906109ac908590610f26565b60405180910390a3505050565b6109c4848484610791565b6109d084848484610b13565b6105a25760405162461bcd60e51b815260040161033690610f44565b6060600a805461028c906113a5565b606081610a2057506040805180820190915260018152600360fc1b6020820152610278565b8160005b8115610a4757610a33816113e0565b9050610a40600a8361134e565b9150610a24565b60008167ffffffffffffffff811115610a7057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610a9a576020820181803683370190505b5090505b841561078957610aaf600183611362565b9150610abc600a866113fb565b610ac7906030611336565b60f81b818381518110610aea57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610b0c600a8661134e565b9450610a9e565b6000610b1e84610c25565b15610c1a57836001600160a01b031663150b7a02610b3a610671565b8786866040518563ffffffff1660e01b8152600401610b5c9493929190610ee9565b602060405180830381600087803b158015610b7657600080fd5b505af1925050508015610ba6575060408051601f3d908101601f19168201909252610ba391810190610e46565b60015b610c00573d808015610bd4576040519150601f19603f3d011682016040523d82523d6000602084013e610bd9565b606091505b508051610bf85760405162461bcd60e51b815260040161033690610f44565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610789565b506001949350505050565b600080826001600160a01b0316803b806020016040519081016040528181526000908060200190933c511192915050565b80356001600160a01b038116811461027857600080fd5b600060208284031215610c7e578081fd5b610c8782610c56565b9392505050565b60008060408385031215610ca0578081fd5b610ca983610c56565b9150610cb760208401610c56565b90509250929050565b600080600060608486031215610cd4578081fd5b610cdd84610c56565b9250610ceb60208501610c56565b9150604084013590509250925092565b60008060008060808587031215610d10578081fd5b610d1985610c56565b93506020610d28818701610c56565b935060408601359250606086013567ffffffffffffffff80821115610d4b578384fd5b818801915088601f830112610d5e578384fd5b813581811115610d7057610d7061143b565b604051601f8201601f1916810185018381118282101715610d9357610d9361143b565b60405281815283820185018b1015610da9578586fd5b81858501868301379081019093019390935250939692955090935050565b60008060408385031215610dd9578182fd5b610de283610c56565b915060208301358015158114610df6578182fd5b809150509250929050565b60008060408385031215610e13578182fd5b610e1c83610c56565b946020939093013593505050565b600060208284031215610e3b578081fd5b8135610c8781611451565b600060208284031215610e57578081fd5b8151610c8781611451565b600060208284031215610e73578081fd5b5035919050565b60008151808452610e92816020860160208601611379565b601f01601f19169290920160200192915050565b60008351610eb8818460208801611379565b835190830190610ecc818360208801611379565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610f1c90830184610e7a565b9695505050505050565b901515815260200190565b600060208252610c876020830184610e7a565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b60208082526019908201527f45786d656e744e46543a2063616e6e6f7420617070726f766500000000000000604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252601a908201527f45786d656e744e46543a2063616e6e6f74207472616e73666572000000000000604082015260600190565b90815260200190565b600082198211156113495761134961140f565b500190565b60008261135d5761135d611425565b500490565b6000828210156113745761137461140f565b500390565b60005b8381101561139457818101518382015260200161137c565b838111156105a25750506000910152565b6002810460018216806113b957607f821691505b602082108114156113da57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156113f4576113f461140f565b5060010190565b60008261140a5761140a611425565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461146757600080fd5b5056fea2646970667358221220e30c80daf48c8704988339995ce84eb43765c68319f24d7839c37edb0202157f64736f6c63430008000033";

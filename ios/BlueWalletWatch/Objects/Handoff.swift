//
//  Handoff.swift
//  BlueWalletWatch Extension
//
//  Created by Admin on 9/27/21.
//  Copyright © 2021 BlueWallet. All rights reserved.
//

import Foundation

enum HandoffIdentifier: String {
  case ReceiveOnchain = "org.bigcoinwallet.bigwallet.receiveonchain"
  case Xpub = "org.bigcoinwallet.bigwallet.xpub"
  case ViewInBlockExplorer = "org.bigcoinwallet.bigwallet.blockexplorer"
}

enum HandOffUserInfoKey: String {
  case ReceiveOnchain = "address"
  case Xpub = "xpub"
}

enum HandOffTitle: String {
  case ReceiveOnchain = "View Address"
  case Xpub = "View XPUB"
}

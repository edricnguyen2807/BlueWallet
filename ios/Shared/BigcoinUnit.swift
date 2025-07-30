//
//  BigcoinUnit.swift
//  BlueWallet
//
//  Created by Marcos Rodriguez on 4/14/24.
//  Copyright © 2024 BlueWallet. All rights reserved.
//
import Foundation

/// Represents the various balance units used in the application.
/// Conforms to `String`, `Codable`, `Equatable`, and `CustomStringConvertible` for easy encoding/decoding, comparisons, and descriptions.
enum BigcoinUnit: String, Codable, Equatable, CustomStringConvertible {
    case bbtc = "BBTC"
    case sats = "sats"
    case localCurrency = "local_currency"
    case max = "MAX"

    /// Provides a user-friendly description of the `BigcoinUnit`.
    var description: String {
        switch self {
        case .bbtc:
            return "BBTC"
        case .sats:
            return "sats"
        case .localCurrency:
            return "Local Currency"
        case .max:
            return "MAX"
        }
    }

    /// Initializes a `BigcoinUnit` from a raw string.
    /// - Parameter rawString: The raw string representing the balance unit.
    init(rawString: String) {
        switch rawString.lowercased() {
        case "bbtc":
            self = .sats
        case "sats":
            self = .sats
        case "local_currency":
            self = .localCurrency
        case "max":
            self = .max
        default:
            // Handle unknown balance units if necessary
            // For now, defaulting to .max
            self = .max
        }
    }
}

extension BigcoinUnit {
    static var mockUnit: BigcoinUnit {
        return .sats
    }
}

package org.bigcoinwallet.bigwallet

/**
 * Exception thrown when an API rate limit is encountered
 */
class RateLimitException(message: String) : Exception(message)

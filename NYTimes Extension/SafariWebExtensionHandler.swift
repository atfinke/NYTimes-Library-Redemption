//
//  SafariWebExtensionHandler.swift
//  NYTimes Extension
//
//  Created by Andrew Finke on 6/24/24.
//

import SafariServices
import os.log

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        context.completeRequest(returningItems: [  ], completionHandler: nil)
    }

}

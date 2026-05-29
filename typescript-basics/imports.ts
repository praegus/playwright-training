// Named imports
import { login, baseUrl, User } from "./utils"; // Imports specific named exports from utils.ts

// File imports
import testdata from "./testdata.json" // Imports the data of the file

// Import from an external library
import { test, expect } from "@playwright/test"; // Imports named exports from an installed npm package

// Rename (alias) while importing
import { User as adminUser } from "./utils"; // Imports "User" but renames it locally to "adminUser"

// Default import
import ApiClient from "./api"; // Imports the default export from api.ts
 
// Import everything as a namespace
import * as utils from "./utils"; // Imports all exports as an object called "utils"
// Usage: utils.login()

/* 
Following imports are far less common
*/

// Type-only import (TypeScript)
import type { User } from "./utils"; // Imports only a type (removed at runtime)

// Side-effect import
import "./setup"; // Runs the file for its side effects, actually imports nothing

// Dynamic import (async)
const module = await import("./utils"); // Loads the module dynamically at runtime


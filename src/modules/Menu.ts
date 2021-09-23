// Dependencies
import { question } from "readline-sync"

// Interface
export interface IMenuData {
    Name: string
    Description: string,
    Function: Function
}

//
export class Menu {
    // Vars
    items: IMenuData[]

    // Constructor
    constructor(items: IMenuData[] = []){
        // Set vars
        this.items = items
    }

    // Adds an item to the menu
    add(data: IMenuData){
        // Add to item array
        this.items.push(data)
    }

    // Displays the menu
    display(){
        // Loop through the items
        for (const [i, data] of Object.entries(this.items)){
            // Output
            console.log(`${i}. ${data.Name} - ${data.Description}`)
        }
    }

    // Prompts for an option and returns the data for it
    prompt(){
        // Constant loop
        while (true){
            // Get the option they want
            const option = parseInt(question("What option do you wish to do?: "))

            // Check if valid number
            if (isNaN(option)){
                // Output and start again
                console.log("Invalid option, input was not a number")
                continue
            }

            // Get data
            const data = this.items[option]

            // Make sure data exists
            if (!data){
                // Output and start again
                console.log("Invalid option, does not exist")
                continue
            }

            // Return
            return data
        }
    }

    // Executes the menu out
    execute(){
        // Get the prompt the user wishs to do
        const option = this.prompt()

        // Execute the function
        option.Function()
    }
}
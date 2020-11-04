# loyalwallet
This application addresses the issues of customers having to many loyalty cards in their wallet. Our solution for the loyalty card providers is to give them the platform  to digitise the loyalty card which they issue to thier customers.


#backend-dev
This is backend of loyalwallet which implements the rest end points of the 
frontend of loyalwallet, 

Data Model:

            User: {
                username:
                password:
                name:
                surname:
                address:
                email:
                loyalcard: {
                    cardnum:
                    barcode:
                    points:
                }
            }
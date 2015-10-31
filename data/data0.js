jgivenReport.addScenarios([{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","name":"Order","scenarios":[{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"ordering_a_book_reduces_the_stock","description":"ordering a book reduces the stock","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"the following books are on stock","words":[{"value":"Given","isIntroWord":true},{"value":"the following books are on stock"},{"value":"id, name, author, stock, 1, The Hitchhiker\u0027s Guide to the Galaxy, Douglas Adams, 5, 2, Lord of the Rings, John Tolkien, 3","argumentInfo":{"argumentName":"books","dataTable":{"headerType":"HORIZONTAL","data":[["id","name","author","stock"],["1","The Hitchhiker\u0027s Guide to the Galaxy","Douglas Adams","5"],["2","Lord of the Rings","John Tolkien","3"]]}}}],"status":"PASSED","durationInNanos":128072982},{"name":"a customer orders book","words":[{"value":"When","isIntroWord":true},{"value":"a customer orders book"},{"value":"1","argumentInfo":{"argumentName":"id","formattedValue":"1"}}],"status":"PASSED","durationInNanos":41735472},{"name":"the stock looks as follows","words":[{"value":"Then","isIntroWord":true},{"value":"the stock looks as follows"},{"value":"id, name, author, stock, 1, The Hitchhiker\u0027s Guide to the Galaxy, Douglas Adams, 4, 2, Lord of the Rings, John Tolkien, 3","argumentInfo":{"argumentName":"stock","dataTable":{"headerType":"HORIZONTAL","data":[["id","name","author","stock"],["1","The Hitchhiker\u0027s Guide to the Galaxy","Douglas Adams","4"],["2","Lord of the Rings","John Tolkien","3"]]}}}],"status":"PASSED","durationInNanos":110340002}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":309729588}],"durationInNanos":309729588,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"ordering_a_book_reduces_the_stock_with_POJO","description":"ordering a book reduces the stock with POJO","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"the following books are on stock","words":[{"value":"Given","isIntroWord":true},{"value":"the following books are on stock"},{"value":"[com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@c03ebd4, com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@556fb175]","argumentInfo":{"argumentName":"books","formattedValue":"[com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@c03ebd4, com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@556fb175]"}}],"status":"PASSED","durationInNanos":6892496},{"name":"a customer orders book","words":[{"value":"When","isIntroWord":true},{"value":"a customer orders book"},{"value":"1","argumentInfo":{"argumentName":"id","formattedValue":"1"}}],"status":"PASSED","durationInNanos":4639696},{"name":"the stock looks as follows","words":[{"value":"Then","isIntroWord":true},{"value":"the stock looks as follows"},{"value":"[com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@737c45ee, com.tngtech.jgiven.example.bookstore.GivenBook$BookOnStock@63d3477d]","argumentInfo":{"argumentName":"stock","dataTable":{"headerType":"HORIZONTAL","data":[["id","name","author","count"],["1","The Hitchhiker\u0027s Guide to the Galaxy","Douglas Adams","4"],["2","Lord of the Rings","John Tolkien","3"]]}}}],"status":"PASSED","durationInNanos":18734225}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":40525821}],"durationInNanos":40525821,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_stock_is_only_reduced_when_possible","description":"the stock is only reduced when possible","tagIds":["FeatureOrder-Order","Story-3"],"explicitParameters":["initial","left","orderIsDone"],"derivedParameters":["initial","left"],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":5770846,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":565156,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"3","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"3"},"isDifferent":true},{"value":"items on stock"}],"status":"PASSED","durationInNanos":1560534},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":3790147},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"2","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"2"},"isDifferent":true},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":320990},{"name":"a corresponding order exists for the customer","words":[{"value":"and","isIntroWord":true},{"value":"a corresponding order exists for the customer","isDifferent":true}],"status":"PASSED","durationInNanos":31516855}],"explicitArguments":["3","2","true"],"derivedArguments":["3","2"],"success":true,"durationInNanos":59060020},{"caseNr":2,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":56991,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":54476,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"0","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"0"},"isDifferent":true},{"value":"items on stock"}],"status":"PASSED","durationInNanos":885029},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":3721423},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"0"},"isDifferent":true},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":59505},{"name":"no corresponding order exists for the customer","words":[{"value":"and","isIntroWord":true},{"value":"no corresponding order exists for the customer","isDifferent":true}],"status":"PASSED","durationInNanos":267912}],"explicitArguments":["0","0","false"],"derivedArguments":["0","0"],"success":true,"durationInNanos":21809755}],"durationInNanos":59060020,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_stock_is_reduced_when_a_book_is_ordered_derived","description":"the stock is reduced when a book is ordered derived","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":["initial"],"derivedParameters":["initial","numberOfItems"],"casesAsTable":true,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":58946,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":54476,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"1","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"1"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":918552},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":3698514},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"parameterName":"numberOfItems","argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":3784280}],"explicitArguments":["1"],"derivedArguments":["1","0"],"success":true,"durationInNanos":20322415},{"caseNr":2,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":56152,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":55314,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"3","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"3"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":935035},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":4351950},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"2","argumentInfo":{"parameterName":"numberOfItems","argumentName":"numberOfItems","formattedValue":"2"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":2986693}],"explicitArguments":["3"],"derivedArguments":["3","2"],"success":true,"durationInNanos":19535164},{"caseNr":3,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":50844,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":48330,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"5","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"5"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":683048},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":3197334},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"4","argumentInfo":{"parameterName":"numberOfItems","argumentName":"numberOfItems","formattedValue":"4"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":2819073}],"explicitArguments":["5"],"derivedArguments":["5","4"],"success":true,"durationInNanos":17377069}],"durationInNanos":20322415,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"no_orders_are_created_when_ordering_a_book_that_is_out_of_stock","description":"no orders are created when ordering a book that is out of stock","tagIds":["FeatureOrder-Order","Story-3"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":51123,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":47492,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"0","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":695060},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":3240356},{"name":"no corresponding order exists for the customer","words":[{"value":"Then","isIntroWord":true},{"value":"no corresponding order exists for the customer"}],"status":"PASSED","durationInNanos":50286},{"name":"there are $ items left on stock","words":[{"value":"and","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":661816}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":18686732}],"durationInNanos":18686732,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"single_POJOs_as_Table","description":"single POJOs as Table","tagIds":["FeatureOrder-Order","Story-4"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"the following book","words":[{"value":"Given","isIntroWord":true},{"value":"the following book"},{"value":"com.tngtech.jgiven.example.bookstore.entity.Book@c7c96c4","argumentInfo":{"argumentName":"book","dataTable":{"headerType":"VERTICAL","data":[["name","Lord of the Rings"],["author","John Tolkien"],["priceInEurCents","30"]]}}}],"status":"PASSED","durationInNanos":7020166}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":12951926}],"durationInNanos":12951926,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_stock_is_reduced_when_a_book_is_ordered","description":"the stock is reduced when a book is ordered","tagIds":["FeatureOrder-Order","Story-2"],"explicitParameters":["initial","left"],"derivedParameters":["initial","left"],"casesAsTable":true,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":50844,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":48889,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"1","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"1"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":694502},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":3313270},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"0","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"0"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":2816838}],"explicitArguments":["1","0"],"derivedArguments":["1","0"],"success":true,"durationInNanos":17034847},{"caseNr":2,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":50286,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":48610,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"3","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"3"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":666565},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":2997587},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"2","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"2"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":2698388}],"explicitArguments":["3","2"],"derivedArguments":["3","2"],"success":true,"durationInNanos":16153170},{"caseNr":3,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":62578,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book","words":[{"value":"and","isIntroWord":true},{"value":"a book"}],"status":"PASSED","durationInNanos":49169,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy, by default the book is not on stock"},{"name":"$ items on stock","words":[{"value":"with","isIntroWord":true},{"value":"5","argumentInfo":{"parameterName":"initial","argumentName":"numberOfItems","formattedValue":"5"}},{"value":"items on stock"}],"status":"PASSED","durationInNanos":650641},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":2907633},{"name":"there are $ items left on stock","words":[{"value":"Then","isIntroWord":true},{"value":"there are"},{"value":"4","argumentInfo":{"parameterName":"left","argumentName":"numberOfItems","formattedValue":"4"}},{"value":"items left on stock"}],"status":"PASSED","durationInNanos":2511492}],"explicitArguments":["5","4"],"derivedArguments":["5","4"],"success":true,"durationInNanos":15893361}],"durationInNanos":17034847,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"customers_can_order_books","description":"customers can order books","tagIds":["FeatureOrder-Order","Story-1"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"PASSED","durationInNanos":50844,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book on stock","words":[{"value":"and","isIntroWord":true},{"value":"a book on stock"}],"status":"PASSED","durationInNanos":350044,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy with 10 items on stock\n"},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"PASSED","durationInNanos":2814883},{"name":"a corresponding order exists for the customer","words":[{"value":"Then","isIntroWord":true},{"value":"a corresponding order exists for the customer"}],"status":"PASSED","durationInNanos":2296660}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":14469995}],"durationInNanos":14469995,"executionStatus":"SUCCESS"},{"className":"com.tngtech.jgiven.example.bookstore.OrderTest","testMethodName":"the_customer_gets_an_email_when_ordering_a_book","description":"the customer gets an email when ordering a book","tagIds":["FeatureOrder-Order","FeatureEmail-Email","Story-5"],"explicitParameters":[],"derivedParameters":[],"casesAsTable":false,"scenarioCases":[{"caseNr":1,"steps":[{"name":"a customer","words":[{"value":"Given","isIntroWord":true},{"value":"a customer"}],"status":"SKIPPED","durationInNanos":0,"extendedDescription":"A default customer with name \u0027John Doe\u0027"},{"name":"a book on stock","words":[{"value":"and","isIntroWord":true},{"value":"a book on stock"}],"status":"SKIPPED","durationInNanos":0,"extendedDescription":"The Hitchhiker\u0027s Guide to the Galaxy with 10 items on stock\n"},{"name":"the customer orders the book","words":[{"value":"When","isIntroWord":true},{"value":"the customer orders the book"}],"status":"SKIPPED","durationInNanos":0},{"name":"the customer gets an email","words":[{"value":"Then","isIntroWord":true},{"value":"the customer gets an email"}],"status":"SKIPPED","durationInNanos":0}],"explicitArguments":[],"derivedArguments":[],"success":true,"durationInNanos":30773464}],"durationInNanos":30773464,"executionStatus":"SCENARIO_PENDING"}]},]);
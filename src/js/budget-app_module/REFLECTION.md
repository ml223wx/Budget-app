### Tabellreflektion för namngivning
|Namn|Förklaring|Reflektion och regler från Clean Code|
|---|---|---|
|categoryExists(expense)|Returnerar ett boolskt värde om en kategori användaren försöker lägga till redan finns.|*Use pronouncable names, Don't be cute, Use searchable names* När funktionen används i koden står det t.ex. "if (this.categoryExists(expense)){...}" vilket förklarar sig självt i och med att koden nästan står skriven i naturligt, mänskligt språk.|
|findCategoryObject(categoryName)|*Use pronouncable names, Don't be cute, Use searchable names* Hittar ett Category-objekt med en sträng som parameter|Jag har döpt funktionen till findCategoryObject trots att man inte skulle lägga till "noise", i det här fallet att skriva att det är ett objekt som returneras. Jag behövde tydliggöra att det var ett Category-objekt som returnerades och inte namnet på en kategori, därför lät jag det stå kvar.|
|getSumByCategoryAndMonth()|*Use pronouncable names, Don't be cute, Use searchable names, Pick one word per concept* Returnerar summan från en kategori utgifter för en angiven månad.|Namnet tangerar att vara för långt men jag anser att den håller sig på rätt sida gränsen. Avvägningen är ju att göra funktionsnamnen så självförklarande som möjligt utan att de blir för långa. Jag anser att namnet förklarar exakt vad den gör.|
|getSumExpensesForMonth()|*Use pronouncable names, Don't be cute, Use searchable names*  Returnerar summan av alla utgifter för en angiven månad|Jag har konsekvent använt mig av verbet "get" och inte blandat. I boken togs det upp som exempel att man inte ska blanda ord som "get", "fetch", "retrieve" osv i sinda funktionsnamn om man inte har en mycket bra anledning till det.|
|||Vad jag inte har döpt mina variabler och funktioner till: - Namn som bara består av ett tecken (förutom i loopar, vilket boken "godkände") - Icke-uttalningsbara namn (enligt boken ska alla namn vara "pronouncable" och mina namn består av riktiga ord) - Jag har hårdkodat så lite som möjligt. Det enda stället är i app.js, vilken fungerar som en demonstration av koden, där man anger från vilken fil historik och standardkategorier ska läsas. Detta innebär att allt är sökbart, boken ger som exempel att "MAX_CLASSES_PER_STUDENT"  mycket mer sökbart än siffran 7, och detta åstadkommer man delvis genom rimliga variabelnamn istället för att hårdkoda. - Bokstaven O, eller L i gemen, eftersom att de kan förvirras med siffrorna 1 och 0. |

### Kapitelreflektion kap 2
Det är lätt att skriva långa funktions/variabelnamn och det är svårare att med några få ord förklara exakt vad funktionen eller variabeln betyder.

Vi fick lära oss värdefulla vanor första året i den här utbildningen i och med att vi fick beskrivet för oss att koden blir "självdokumenterande" om man väljer förklarande namn på variabler, argument, klasser, osv. Därför kändes det mesta i kapitlet inte som några nyheter när jag läste det, men jag hade kanske inte kunnat sätta ord på det förrän nu. När jag läste "regeln" om att funktioner och metoder ska ha verb som namn, medan klasser ska ha substantiv kändes det självklart, men jag hade nog inte kunnat sätta uttrycka det själv. Detsamma gäller "regeln" att man ska försöka namnge funktioner på så sätt att man undviker att behöva beskriva med en kommentar vad funktionen gör.

Det jag vill ta med mig i framtiden är att vara mer konsekvent med min namngivning, jag har för tillfället inte överblick över alla mina funktioner och vet inte om jag har gjort mig skyldig till att använda samma ord för flera olika saker, exempelvis som bokens exempel på att man kan använda "add" för att beskriva att konkatinera strängar, men också för att exempelvis lägga till något i en array. I tidigare kurser har jag definitivt gjort mig skyldig till att använda två väldigt lika ord för variabler, exakt som i bokens exempel att döpa något till "theZork" för att man redan använt "zork".

En annan sak jag tar med mig är att allt handlar om balans när det gäller läsbarhet (inte för långa namn), förståelse/understandability (inte för korta namn).



### Tabellreflektion för funktioner/metoder

| Metodnamn | Länk eller kod | Antal rader (ej ws) | Reflektion |
|---|---|---:|---|
| `getExpensesSameCategory()` | Se kod nedan | 9 | **Small!** Kod innanför if/else/while statements bör vara en rad lång vilket jag har lyckats med. Enligt boken ska det helst vara ett funktionsanrop men det är det inte i den här funktionen.  **One level of abstraction per function** Funktionen är bara en loop som skapar en ny array.  **Use descriptive names** Funktionsnamnet förklarar vad den gör.|
| `addExpense()` | Se kod nedan | 9 |**Do one thing** Funktionen gör en sak, dvs lägger till en Expense. Kontrollen om den är giltig görs i en annan funktion. **One level of abstraction per function** Kontrollen om Expense är giltig görs i en seeparat funktion som anropas från addExpense().  **Use descriptive names** Funktionsnamnet förklarar vad den gör.  |
| `getExpensesSameCategory()` | Se kod nedan | 9 | **Small!** Kod innanför if/else/while statements bör vara en rad lång vilket jag har lyckats med. Enligt boken ska det helst vara ett funktionsanrop men det är det inte i den här funktionen.  **One level of abstraction per function** Funktionen är bara en loop som skapar en ny array. **Use descriptive names** Funktionsnamnet förklarar vad den gör.|
| `getAllExpensesForMonth()` | Se kod nedan | 9 | **Small!** Kod innanför if/else/while statements bör vara en rad lång vilket jag har lyckats med. Enligt boken ska det helst vara ett funktionsanrop men det är det inte i den här funktionen. Hade kunnat göra en extra genomsökningsfunktion. **One level of abstraction per function** Funktionen är bara en loop som skapar en ny array. **Use descriptive names** Funktionsnamnet förklarar vad den gör. **Function arguments** Har dessvärre gjort en *triadic function*. Jag skickade med Expense:en som ska genomsökas, och sedan månaden och året som ska matchas mot denna. Enligt boken bör man överväga att skapa ett objekt av argumentetn om man känner sig tvungen att skicka in tre argument, men det kändes "onödigt" i det här fallet. Då skulle jag ha behövt skapa ett objekt för varje Expense som ska genomsökas, som sedan returnerar ett boolskt värde. |
| `categoryExists()` | Se kod nedan | 7 | **Small!** Kod innanför if/else/while statements bör vara en rad lång vilket jag har lyckats med. **One level of abstraction per function** Funktionen är bara en loop som returnerar ett boolskt värde när den har hittat det den ska (eller inte hittar det). **Use descriptive names** Funktionen får en naturlig plats i koden som förklarar sig själv, det bör vara lätt att förstå vad som menas när "true" eller "false" returneras från categoryExists('Food').|

#### `getExpensesSameCategory()`

```js
getExpensesSameCategory(expenses, categoryName, propertyName) {
  let expensesInCategory = []

  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i][propertyName] === categoryName) {
      expensesInCategory.push(expenses[i])
    }
  }

  return expensesInCategory
}
```

#### `addExpense()`

```js
addExpense(expense) {
  if (this.categoryExists(expense)) {
    this.expenseRecord.push(expense)
  } else {
    throw new Error(
      `Category "${expense.category}" does not exist.`
    )
  }
}
```

#### `getExpensesSameCategory()`

```js
getExpensesSameCategory(expenses, categoryName, propertyName) {
  let expensesInCategory = []

  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i][propertyName] === categoryName) {
      expensesInCategory.push(expenses[i])
    }
  }

  return expensesInCategory
}
```

#### `getAllExpensesForMonth()`

```js
getAllExpensesForMonth(year, month) {
  let expensesForMonth = []

  for (let i = 0; i < this.expenseRecord.length; i++) {
    if (this.isExpenseInMonth(this.expenseRecord[i].date, year, month)) {
      expensesForMonth.push(this.expenseRecord[i])
    }
  }

  return expensesForMonth
}
```

#### `categoryExists()`

```js
categoryExists(expense) {
  for (let i = 0; i < this.categories.length; i++) {
    if (this.categories[i].name === expense.category) {
      return true
    }
  }
}
```

### Kapitelreflektion kap 3

En av mina funderingar gällande kapitel 3 är regeln/riktlinjen om att man ska ha så få parametrar som möjligt när man skriver funktioner. Jag kan förstå motiveringen i att koden på så sätt blir mer lättläst om man gör stora projekt (och det är väl det vi övar oss i!) men det känns lite överdrivet att exempelvis, i en loop, skapa ett objekt som innehåller "månad", "dag" och "namn" och sedan jämföra dessa och returnerar sant eller falskt. Varje gång koden kör igenom en iteration av loopen skulle den behöva göra samma sak tills den hittar det den söker. Har man ett litet program tar det inte upp så mycket minne, men skulle man ha ett väldigt stort program vill man nog inte slösa minne på det bara för att man vill slippa skriva "triadic" funktioner.

I koden för denna labb har jag inte kunnat skriva några "niadic" funktioner eftersom att varje funktionsanrop hittills har krävt argument från användaren. Oftast är det att man vill söka efter något varför information om t.ex. kategori eller datum behövs. Det enda sättet att göra "niadic" funktioner i min labb hittills hade varit att skapa exempelvis en funktion som bara söker efter "expenses" från i Mars, och att det skulle finnas separata funktioner för varje månad, men det känns som ett slöseri med plats, och mer förvirrande.

Jag har haft störst problem med att separera abstraktionsnivåer, dels att förstå vad som tillhör vilken abstraktionsnivå, men även själva refaktoriseringen.
Exempelvis försökte jag refaktorisera en av mina funktioner genom att skriva: <br><br>isCategoryInObjectSameCategory(categoryInArray, categoryToCompare){
    <br>return categoryInArray === categoryToCompare <br>
  } <br> <br>
dvs en funktion som enbart gjorde en jämförelse, men det kändes väldigt onödigt. Skriver jag däremot en jämförelse i en funktion som ska ha hög abstraktionsnivå "blandar" man, enligt boken abstraktionsnivåer. Efter lite trixande kom jag på att jag kunde lösa det, men med en funktion som tog in tre argument. 

En annan sak jag tar med mig är att det är svårt att hitta balans mellan att skapa för många vs för få steg, t.ex. tilldela en variabel ett värde och sedan skicka in variabeln i en funktion istället för att skicka in värdet direkt, vilket gör läsbarheten lägre.

### Reflektion över egen kodkvalitet
Jag har lyckats korta ner/refaktorisera mina funktioner mer än i tidigare kurser, den längsta funktionen är 9 rader lång (i tidigare projekt finns det funktioner som jag trott varit omöjliga att få ner under 20). En detalj jag lärde mig var bracket notation (expenses[i][property]) vilket gjorde att jag kunde generalisera en av mina funktioner och ta bort en som nu blev en dublett. Jag är säker på att jag hade kunnat generalisera en del av mina "loopiga" funktioner.

På det stora hela tycker jag att min kodkvalitet i den här labben har varit lite bättre än i tidigare projekt, men att det såklart finns lång väg kvar att gå. Jag har tyvärr haft mycket mindre tid än jag velat till att gå igenom koden ordentligt, funderat på variabel/metodnamn, funderat på ordningen på funktionerna, funderat på om det behövs mer/bättre kommentarer osv. Detta är inte kursens fel utan snarare det berömda "livspusslet".

Jag har inte heller lagt tillräckligt med tid på att sortera upp koden i olika mappar, eller att fundera på vilket sätt jag annars skulle organisera det, utan allt ligger i /src.

Vid ett tillfälle försökte jag följa bokens exempel på hur man bör namnge jämförande funktioner (så att man kommer ihåg i vilken ordning man ska skicka in argumenten), men det blev en funktion med namnet "isExpensesDateYearSameYearExpensesMonthSameMonth (expensesFullYear, year, expensesMonth, month)" som dessutom tog in fyra argument. Min kod har bättre kvalitet än att den funktionen fick vara kvar, den refaktoriserade jag och döpte om.

Något min kod saknar är tillräcklig error handling och exceptions. Det erkänner jag är för att jag känner mig osäker på det, vilket är exakt varför jag borde skriva mer sådant i min labb...

Det finns ett logikfel i mimn kod, och det är att när man filtrerar Expense-objekt efter subkategorier söker den bara på just subkategorier utan att ta hänsyn till huvudkategorin subkategorin hör till. Söker man t.ex. på "Subscriptions" bör man både få med "Subscriptions" som hör till "Undehållning" (om den kategorin har lagts till dvs) och till "Kommunikation" (om den kategorin har lagts till).

### Reflektion över hur det var att skriva en modul
Jag är antingen en riktig impostor eller har impostor syndrome, för jag är osäker på om jag verkligen har "skrivit en modul". I början var det svårt att tänka ut hur jag skulle göra koden så generell att den går att använda i många olika sammanhang. En av sakerna jag kanske är stoltast över är att jag kom på idén till att läsa in Expense-historik samt Categories från en fil i JSON-format. Det gör koden mer generellt användbar och mer modifierbar. Det förbereder den också för vår framtida labb att skriva en applikation.

### AI-samarbete
Jag har inte lyckats skaffa någon AI-assistent till VSCode och tänkte första läsåret att det skulle få mig att lära mig koda bättre att jag saknade en. Det börjar bli dags att få ordning på det nu, eftersom jag ofta bara kopierar in funktioner där något blivit fel/buggigt in i chatGPT och låter den felsöka om jag inte snabbt ser vad som blivit fel. Varje gång den ger mig ett förslag på en lösning läser jag igenom för att se så att jag förstår. 

Jag bad den om tips på hur jag kan refaktorisera och göra så att funktionerna har samma abstraktionsnivå, men modifierade så att jag fortfarande förstod. Ett svar jag fick var t.ex:<br><br>

"Problemet här är främst att getAllExpensesForMonth gör tre saker på samma abstraktionsnivå:

Itererar över alla utgifter.
Extraherar år/månad från ett datum.
Avgör om en utgift tillhör den efterfrågade månaden."<br><br>

Jag bad den också skriva den enda error handling:en jag har i min kod, dvs i ExpenseManager-klassen och metoden addExpense().

Jag tog mycket hjälp av chatGPT för att få strukturen till mina testfiler, och frågade den om råd när jag inte fick resultatet jag förväntade mig. Sedan utgick jag från strukturen för att själv skriva testen till mina olika funktioner.

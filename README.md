![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)

# Egzamin 2
> Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki.

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`.

Adres repozytorium możesz znaleźć na jego stronie po naciśnięciu w guzik "Clone or download".

Zwróć uwagę, żeby użyć adresu własnego forka, powinien wyglądać zgodnie ze schematem:
`https://github.com/twoj-login/adres_repozytorium`


3. Zaimportuj projekt jako projekt `Maven`, wg poniższych wskazówek:

	* W `IntelliJ` wybieramy: `File –> New –> Project from Existing Sources...`
	* Wskazujemy lokalizację katalogu ze sklonowanym projektem i zatwierdzamy.
	* Następnie w nowym oknie wybieramy: `Import project from external model` i wskazujemy `Maven`
	* Wybieramy opcję: ` Finish`, (w `IntelliJ` przed 2020: `Next –> Next –> Next –> Finish`);

4. Rozwiąż zadania i zakomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie zakomituj zmiany komendą `git commit -m "nazwa_commita"`
5. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`.
W repozytoriach utworzonych po 1 października 2020 `git push origin main`.
6. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.
    

#### Zadania
Klasy do zadań z servletów umieść w pakiecie **pl.coderslab.exam**.

Dla części JavaScript pliki do zadań są przygotowane w katalogu **JavaScript**.



## JavaScript - zadanie 1. (2.5 pkt)

**Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**

Napiszcie funkcję biggestSumOfTwoElements(array), która przyjmuje tablicę z liczbami i zwraca sumę dwóch największych elementów z tej tablicy. 

Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby - nie trzeba robić walidacji.

Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.  
Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logiczną **false**.

**Przykład:**
```js
biggestSumOfTwoElements([1,2,3,4]) // => 7
biggestSumOfTwoElements([]) // => false
biggestSumOfTwoElements([76]) // => 76
biggestSumOfTwoElements([23,45,17,12]) // => 68
```

## JavaScript - zadanie 2. (3.5 pkt)

**Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**

- Do każdego podpunktu stwórzcie odpowiednią funkcję o nazwie podanej w treści zadania.
- Każda funkcja niech zwraca tablicę wypełnioną odpowiednimi elementami. ( Pamiętacie, że zwracanie, a wyświetlanie to różnica? )

Wykonaj następujące polecenia:

1 - Szukanie nazw tagów:
- znajdźcie wszystkie elementy o klasie sample_class i zapiszcie je w zmiennej **task1EL**,
- stwórzcie funkcję getTag(elements) do której przekażecie jako argument znalezione elementy,
- stwórzcie w funkcji tablicę i wypełnijcie ją nazwami tagów. Pobierzcie je z elementów przekazanych jako argument.
- zwróćcie tablicę.

2 - Szukanie nazw klas:
- znajdźcie element o id sample_id i zapiszcie go w zmiennej **task2EL**
- stwórzcie funkcję getClass(element) do której przekażecie jako argument znaleziony element.
- stwórzcie w funkcji tablicę i wypełnij ją nazwami klas. Pobierz klasy z przekazanego jako argument elementu.
- zwróćcie tablicę.

3 - Szukanie tekstu:
- znajdźcie wszystkie elementy listy znajdujące się w elemencie o klasie sample_class_2 i zapiszcie je w zmiennej **task3EL**
- stwórzcie funkcję getInnerText(elements), do której przekażecie jako argument znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnij ją tekstami pobranymi z elementów przekazanych jako argument.
- zwróćcie tablicę.

4 - Szukanie adresów linków:
- znajdźcie wszystkie linki i zapiszcie je w zmiennej **task4EL**,
- stwórzcie funkcję getAddress(elements), do której przekażecie jako argument znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnij ją adresami (o ile link posiada adres) pobranymi z elementów przekazanych jako argument.
- zwróćcie tablicę.

5 - Szukanie tagów dzieci:
- znajdźcie wszystkie dzieci elementu o klasie sample_class_3 i zapiszcie je w zmiennej **task5EL**,
- do funkcji, która wyszukuje tagi elementów, przekażecie jako argument, znalezione dzieci.

## JavaScript - zadanie 3. (4pkt)

Korzystając z adresu https://fe-api-jquery.firebaseio.com/fe-api-jquery.json wczytajcie na stronę informacje o filmach. 

Kolejne filmy wstawcie do listy.  
Tytuły filmów wczytajcie do elementów h2, natomiast rok produkcji do elementów h3. 

Utwórzcie te elementy i wstawcie je do DOM. 

Zauważcie, że dane wczytywane z tego adresu są w postaci tablicy. 
Skorzystajcie z pętli, aby wczytać wszystkie filmy.

**Hint:**  
 Zobaczcie jak wygląda w konsoli obiekt, który otrzymujecie jako odpowiedź, zanim wstawicie content na stronę.



### Zadanie 1 (2 pkt)

1. Utwórz servlet dostępny pod adresem **/register**.
2. Na stronie wyświetl formularz zawierający pola:
    * znane technologie — checkboxy z możliwością wielokrotnego wyboru 
    (wartości to: Servlets, JSP, Java, MySQL)
    * login github - pole tekstowe
3. Formularz utwórz w jsp, dane wysyłaj metodą **POST**
4. Po wysłaniu odbierz dane i wyświetl je na ekranie. Możesz w tym celu wykorzystać konstrukcję typu:

```java
response.getWriter().append("login: ");
```


## Zadanie 2 (4 pkt)

1. Utwórz servlet dostępny pod adresem `/furniture`.
2. Wyświetl w tabeli html wszystkie informacje dotyczące mebli. 
Poszczególne informacje mają być wyświetlane w oddzielnych komórkach tabeli. Wykorzystaj plik JSP.
3. Wykorzystaj udostępnioną klasę `FurnitureDao`, oraz klasę `Furniture`.
4. W tabeli z meblami, przy każdym wierszu ma być dostępny link umożliwiający usunięcie mebla z listy.
5. Do usuwania wykorzystaj dodatkowy servlet dostępny pod adresem `/furniture/delete`. Przekazuj w parametrze identyfikator. 
6. Po usunięciu wiersza wyświetl ponownie zmniejszoną listę.
7. Dane o meblach przechowuj w sesji.


## Zadanie 3 (4 pkt)

1. Utwórz servlet dostępny pod adresem **/createCookie**.
2. Wyświetl formularz, który umożliwi tworzenie ciasteczka, formularz ma posiadać pola `name` oraz `value`.  Wykorzystaj plik JSP.
3. Po utworzeniu ciasteczka wyświetl listę wszystkich ciasteczek.
4. Utwórz servlet dostępny pod adresem **/deleteCookie**. Wykorzystaj plik JSP.
5. Wyświetl formularz, który umożliwi usuwanie ciasteczka, o podanej w nim nazwie.
6. Po usunięciu ciasteczka wyświetl ponownie listę wszystkich ciasteczek. 

// Materiał autorski na podstawie zakresu przekazanych zdjęć; nie przepisuje ćwiczeń z podręcznika.
const LESSONS = [
{title:'Start od zera',subtitle:'Osoby, czasowniki i budowa zdań',icon:'🌱',intro:'Zanim poznasz czasy, zobacz jak zbudowane jest angielskie zdanie. Wszystko ma swój schemat!',sections:[
{h:'1. Kto wykonuje czynność?',p:'I = ja; you = ty/wy; he = on; she = ona; it = to/ono; we = my; they = oni/one. To są podmioty – mówią, o kim jest zdanie.',ex:[['I study English.','Uczę się angielskiego.'],['She reads books.','Ona czyta książki.']]},
{h:'2. Podmiot + czasownik + reszta',p:'W zwykłym zdaniu najpierw mówimy KTO, potem CO ROBI, a na końcu dodajemy szczegóły.',formula:'I + play + tennis.',ex:[['They like music.','Oni lubią muzykę.']]},
{h:'3. Am, is, are – „być”',p:'I am; you/we/they are; he/she/it is. W przeczeniu dodajemy not: am not, is not (isn’t), are not (aren’t). W pytaniu przestawiamy: Are you…? Is she…?',formula:'She is happy. → Is she happy? → She isn’t happy.',ex:[['We are tired.','Jesteśmy zmęczeni.'],['Are you ready?','Czy jesteś gotowa?']]},
{h:'4. Do i does jako pomocnicy',p:'W Present Simple dla większości czasowników pytania i przeczenia robimy z do/does. Does dla he/she/it; do dla pozostałych. Po does czasownik nie ma końcówki -s.',formula:'Do you like tea? / Does she like tea?',ex:[['He does not play football.','On nie gra w piłkę.']]},
{h:'5. Trzy formy czasownika',p:'W późniejszych lekcjach przyda się podział: I forma (go), II forma (went), III forma (gone). Czasowniki regularne zwykle mają -ed, nieregularnych trzeba nauczyć się osobno.',ex:[['go – went – gone','iść – poszedł – poszedł (forma III)'],['work – worked – worked','pracować – forma przeszła – forma III']]}
],qs:[
['Wybierz poprawny zaimek: „ona”.',['she','he','they','we'],0,'She oznacza ona.'],
['Uzupełnij: I ___ happy.',['am','is','are','be'],0,'Z I używamy am.'],
['Uzupełnij: They ___ at home.',['are','is','am','be'],0,'They łączy się z are.'],
['Jak zapytać: „Czy on jest gotowy?”',['Is he ready?','He is ready?','Are he ready?','Does he ready?'],0,'Przy is zamieniamy kolejność: Is he…?'],
['Uzupełnij: She ___ not tired.',['is','are','am','do'],0,'She is not tired.'],
['Który szyk jest poprawny?',['I like music.','Like I music.','Music I like?','I music like.'],0,'Zwykły szyk to podmiot + czasownik + reszta.'],
['Wybierz pytanie: „Czy oni grają?” (ogólnie)',['Do they play?','Does they play?','Are they play?','They do play?'],0,'Z they w Present Simple używamy do.'],
['Co jest III formą od „go”?',['gone','went','going','goes'],0,'go – went – gone.'],
['Uzupełnij: Does he ___ coffee?',['like','likes','liked','liking'],0,'Po does używamy formy podstawowej.'],
['Które zdanie jest przeczeniem od „She is kind”?',['She isn’t kind.','She don’t kind.','She aren’t kind.','She not is kind.'],0,'Dla she używamy isn’t.']
]},
{title:'Present Simple',subtitle:'Fakty, rutyna, przyzwyczajenia',icon:'☀️',intro:'Present Simple to czas codzienności. Pomyśl: co robisz zwykle, regularnie lub co jest prawdą?',sections:[
{h:'1. Kiedy używamy?',p:'Nawyki i rutyna (every day), fakty i prawa natury, upodobania oraz stałe sytuacje. Używamy go także do rozkładów jazdy.',ex:[['I drink water every morning.','Piję wodę każdego ranka.'],['The sun rises in the east.','Słońce wschodzi na wschodzie.']]},
{h:'2. Zdania twierdzące',p:'I/you/we/they + czasownik. Dla he/she/it najczęściej dodajemy -s lub -es. Study → studies, watch → watches, go → goes.',formula:'I play. / She plays.',ex:[['Tom watches TV.','Tom ogląda telewizję.']]},
{h:'3. Przeczenia',p:'I/you/we/they + don’t + czasownik. He/she/it + doesn’t + czasownik BEZ -s.',formula:'I don’t work. / She doesn’t work.',ex:[['He doesn’t like fish.','On nie lubi ryb.']]},
{h:'4. Pytania',p:'Do + I/you/we/they + czasownik? Does + he/she/it + czasownik? Krótkie odpowiedzi: Yes, I do. / No, she doesn’t.',formula:'Does Anna speak English?',ex:[['Do you live here?','Czy tutaj mieszkasz?']]},
{h:'5. Sygnały',p:'always (zawsze), usually (zwykle), often (często), sometimes (czasami), rarely (rzadko), never (nigdy), every day/week. Nie zawsze są konieczne.',ex:[['She often visits her grandma.','Ona często odwiedza babcię.']]},
{h:'6. Ważne: „be” jest wyjątkowe',p:'Dla am/is/are nie stosujemy do/does: Is she happy? (nie Does she be happy?).',ex:[['Are they at school?','Czy są w szkole?']]}
],qs:[
['She ___ to school every day.',['goes','go','is going','going'],0,'Regularna czynność i she: goes.'],
['I ___ like onions.',['don’t','doesn’t','am not','isn’t'],0,'Przy I i zwykłym czasowniku używamy don’t.'],
['___ he play basketball?',['Does','Do','Is','Has'],0,'W Present Simple przy he: does.'],
['Water ___ at 100°C at normal pressure.',['boils','is boiling','boil','has boiled'],0,'Prawa natury opisuje Present Simple; water = it.'],
['She doesn’t ___ TV.',['watch','watches','watching','watched'],0,'Po doesn’t jest forma podstawowa.'],
['They usually ___ breakfast at seven.',['eat','eats','eating','are eat'],0,'They + eat w rutynie.'],
['My brother ___ English.',['studies','study','studying','is study'],0,'Przy he końcówka -ies w studies.'],
['Jakie słowo często wskazuje rutynę?',['every Monday','right now','at the moment','currently'],0,'Every Monday = każdy poniedziałek.'],
['___ you work on Saturdays?',['Do','Does','Are','Have'],0,'Do z you w zwykłym pytaniu.'],
['The train ___ at 8:00 tomorrow.',['leaves','is leaving always','leave','has left'],0,'Stały rozkład jazdy można opisać Simple.']
]},
{title:'Present Continuous',subtitle:'Teraz, tymczasowo i plany',icon:'🌸',intro:'Present Continuous pokazuje, że coś właśnie trwa albo jest sytuacją tymczasową.',sections:[
{h:'1. Konstrukcja',p:'Potrzebujesz dwóch elementów: am/is/are i czasownika z -ing. Bez am/is/are zdanie jest niepełne.',formula:'I am reading. / She is reading. / They are reading.',ex:[['I am learning English now.','Uczę się angielskiego teraz.']]},
{h:'2. Pytania i przeczenia',p:'W pytaniu przenieś am/is/are na początek. W przeczeniu dodaj not po am/is/are.',formula:'Are you studying? / She isn’t sleeping.',ex:[['Is he working today?','Czy on dzisiaj pracuje?']]},
{h:'3. Kiedy używamy?',p:'Czynności właśnie w tej chwili; czynności tymczasowe (np. w tym tygodniu); zmiany i trendy; ustalone plany na bliską przyszłość.',ex:[['Prices are rising.','Ceny rosną.'],['We are meeting tomorrow.','Spotykamy się jutro (umówiliśmy się).']]},
{h:'4. Określenia czasu',p:'now, right now, at the moment, currently, today, this week. Są wskazówką, ale ważniejszy jest sens zdania.',ex:[['She is studying at the moment.','Ona uczy się w tej chwili.']]},
{h:'5. Pisownia -ing',p:'make → making (opuszczamy e); run → running (podwajamy spółgłoskę w typowych krótkich formach); lie → lying.',ex:[['He is running.','On biegnie.']]},
{h:'6. Częsty błąd',p:'Nie mów „She studying”. Prawidłowo: „She is studying”.',ex:[['They aren’t watching TV.','Oni nie oglądają telewizji.']]}
],qs:[
['Look! The dog ___ in the garden.',['is running','runs','run','has run'],0,'Look! wskazuje trwającą sytuację.'],
['I ___ a book right now.',['am reading','read','reads','have read'],0,'I + am + reading.'],
['___ they watching a film?',['Are','Do','Does','Have'],0,'W Continuous pytanie zaczyna are.'],
['She is ___ dinner.',['making','makeing','make','makes'],0,'Make traci -e przed -ing.'],
['We ___ working today.',['aren’t','don’t','doesn’t','isn’t'],0,'We are not → aren’t.'],
['My English ___ better these days.',['is getting','gets always','get','has get'],0,'Trwająca zmiana: is getting.'],
['What ___ you doing?',['are','do','does','have'],0,'Are you doing…?'],
['They ___ to Warsaw tomorrow (uzgodniony plan).',['are travelling','travels','travelling','have travelling'],0,'Ustalony plan może być w Continuous.'],
['He ___ at the moment.',['is sleeping','sleeps every day','sleep','has sleep'],0,'At the moment → is sleeping.'],
['Wybierz poprawne zdanie.',['She is listening.','She listening.','She are listening.','She is listen.'],0,'Muszą być is i czasownik z -ing.']
]},
{title:'Simple czy Continuous?',subtitle:'Jak zdecydować, którego czasu użyć?',icon:'🧠',intro:'Te dwa czasy łatwo pomylić. Pytaj siebie: „zawsze/zwykle” czy „teraz/tymczasowo”?',sections:[
{h:'1. Porównanie',p:'Present Simple: rutyna, fakt, stan. Present Continuous: akcja teraz, sytuacja przejściowa, zmiana lub uzgodniony plan.',ex:[['I work from home.','Pracuję z domu (zwykle).'],['I am working from home this week.','Pracuję z domu w tym tygodniu (tymczasowo).']]},
{h:'2. Stative verbs: czasowniki stanów',p:'Niektóre czasowniki zwykle opisują stan, a nie działanie: know, believe, understand, need, want, own, like, love. Zwykle nie używamy ich w Continuous.',ex:[['I know the answer.','Znam odpowiedź.'],['I need help.','Potrzebuję pomocy.']]},
{h:'3. Think, have i inne wyjątki',p:'Think = „uważam” → zwykle Simple; think about = „rozważam” → może być Continuous. Have = „posiadam” → Simple; have lunch = „jem lunch” → może być Continuous.',ex:[['I think you are right.','Uważam, że masz rację.'],['I am thinking about my future.','Rozmyślam o przyszłości.'],['She has a dog.','Ona ma psa.'],['She is having lunch.','Ona właśnie je lunch.']]},
{h:'4. Irytujące przyzwyczajenia',p:'Continuous + always może oznaczać irytację, mimo że coś się powtarza.',ex:[['He is always losing his keys!','On ciągle gubi klucze! (irytacja)']]},
{h:'5. Jak rozwiązać zadanie?',p:'1) Przeczytaj sens. 2) Czy rutyna/fakt/stan czy akcja w trakcie? 3) Zobacz podmiot. 4) Dopiero wtedy wybierz poprawną formę.',ex:[['She usually walks, but today she is driving.','Zwykle chodzi pieszo, ale dziś jedzie autem.']]}
],qs:[
['Usually I ___ to school on foot.',['walk','am walking','have walked','walking'],0,'Usually = rutyna, Simple.'],
['Please be quiet. I ___ .',['am studying','study every day','studies','have study'],0,'Dzieje się teraz, Continuous.'],
['I ___ what you mean.',['understand','am understanding','have understanding','understanding'],0,'Understand to zwykle czasownik statyczny.'],
['She ___ two cats. (posiadanie)',['has','is having','have','having'],0,'Posiadanie: has.'],
['We ___ lunch now.',['are having','have always','has','have had yesterday'],0,'Have lunch = czynność; now → Continuous.'],
['I ___ this film is great. (moja opinia)',['think','am thinking','thinking','have thinking'],0,'Think = uważam → Simple.'],
['I ___ about moving to London. (rozważam teraz)',['am thinking','think always','thinks','have thinking'],0,'Rozważanie w trakcie: am thinking.'],
['These days it ___ colder.',['is getting','gets always','get','has get'],0,'Zmiana zachodząca teraz: Continuous.'],
['My sister ___ coffee. (ogólna preferencja)',['likes','is liking','like','has liking'],0,'Upodobanie jako stan → Simple.'],
['He is always ___ my things! (irytacja)',['taking','take','takes','taken'],0,'Is always taking podkreśla irytację.']
]},
{title:'Present Perfect Simple',subtitle:'Doświadczenia, rezultaty i „już”',icon:'✨',intro:'To nie jest po prostu „czas przeszły”. Ważne jest połączenie tego, co było, z teraźniejszością.',sections:[
{h:'1. Konstrukcja',p:'I/you/we/they + have + III forma; he/she/it + has + III forma. III forma = past participle, np. done, seen, eaten, worked.',formula:'I have finished. / She has finished.',ex:[['I have lost my keys.','Zgubiłam klucze (teraz ich nie mam).']]},
{h:'2. Pytania i przeczenia',p:'Have/Has na początek w pytaniu; haven’t/hasn’t w przeczeniu.',formula:'Have you seen it? / He hasn’t finished.',ex:[['Have you ever been abroad?','Czy kiedykolwiek byłaś za granicą?']]},
{h:'3. Kiedy używamy?',p:'Doświadczenia bez określenia dokładnego momentu; obecny rezultat wcześniejszego zdarzenia; czynności zakończone w czasie, który jeszcze trwa (np. today); sytuacje trwające od przeszłości do dziś.',ex:[['She has visited Italy twice.','Odwiedziła Włochy dwa razy.'],['I have known her for years.','Znam ją od lat.']]},
{h:'4. Słówka sygnalizujące',p:'already = już; just = właśnie; yet = jeszcze/już (głównie pytania i przeczenia); ever = kiedykolwiek; never = nigdy; so far = jak dotąd; recently = ostatnio.',ex:[['I have just eaten.','Właśnie zjadłam.'],['She hasn’t called yet.','Ona jeszcze nie zadzwoniła.']]},
{h:'5. Since i for',p:'Since = od jakiego MOMENTU (since 2020, since Monday). For = przez JAK DŁUGO (for three days, for years).',ex:[['We have lived here since 2020.','Mieszkamy tu od 2020 roku.'],['We have lived here for six years.','Mieszkamy tu od sześciu lat.']]},
{h:'6. Uwaga na Past Simple',p:'Gdy podajesz zakończony konkretny czas przeszły (yesterday, last week, in 2020), zwykle używasz Past Simple, nie Present Perfect.',ex:[['I saw him yesterday.','Widziałam go wczoraj.'],['I have seen him before.','Widziałam go już kiedyś.']]}
],qs:[
['I ___ my homework already.',['have finished','has finished','am finishing','finishes'],0,'I have + III forma.'],
['She ___ never been to Spain.',['has','have','is','does'],0,'She + has + been.'],
['Have you ever ___ sushi?',['eaten','ate','eat','eating'],0,'Eat – ate – eaten.'],
['They haven’t arrived ___.',['yet','ever','since','for'],0,'Yet stosuje się m.in. w przeczeniach.'],
['He has ___ left.',['just','yesterday','last year','ago'],0,'Just = właśnie.'],
['I have known him ___ 2019.',['since','for','during','ago'],0,'2019 to konkretny punkt startowy.'],
['We have lived here ___ five years.',['for','since','ago','last'],0,'Five years to długość okresu.'],
['___ she seen this movie?',['Has','Have','Does','Is'],0,'Has + she + III forma.'],
['Wybierz prawidłowe zdanie o wyniku teraz.',['I have lost my phone.','I has lost my phone.','I have lose my phone.','I losing my phone.'],0,'Have + III forma: lost.'],
['„I saw him yesterday” jest w Past Simple, ponieważ…',['podano zakończony czas przeszły','jest opisem codziennej rutyny','czynność trwa teraz','brakuje podmiotu'],0,'Yesterday wskazuje zamknięty moment w przeszłości.']
]},
{title:'Present Perfect Continuous',subtitle:'Jak długo coś trwa?',icon:'⏳',intro:'Ten czas pomaga pokazać, że czynność zaczęła się wcześniej i trwa do teraz albo właśnie się skończyła, zostawiając ślad.',sections:[
{h:'1. Konstrukcja',p:'I/you/we/they + have been + -ing; he/she/it + has been + -ing.',formula:'I have been studying. / She has been studying.',ex:[['I have been reading for an hour.','Czytam od godziny.']]},
{h:'2. Pytania i przeczenia',p:'Have/Has przed podmiotem w pytaniu; haven’t/hasn’t w przeczeniu.',formula:'Have you been waiting long? / He hasn’t been sleeping well.',ex:[['Has she been working all day?','Czy ona pracuje cały dzień?']]},
{h:'3. Kiedy używamy?',p:'Gdy chcemy podkreślić DŁUGOŚĆ lub PRZEBIEG czynności, która trwa od przeszłości do teraz. Także gdy skończyła się przed chwilą, ale widać ślady.',ex:[['It has been raining. The streets are wet.','Padało – ulice są mokre.'],['We have been learning for two hours.','Uczymy się od dwóch godzin.']]},
{h:'4. Since i for',p:'Since + moment rozpoczęcia; for + okres trwania. Pytamy: How long have you been…?',ex:[['She has been practising since morning.','Ćwiczy od rana.']]},
{h:'5. Perfect Simple czy Perfect Continuous?',p:'Perfect Simple często akcentuje WYNIK: „I have written three emails”. Continuous akcentuje CZAS i PROCES: „I have been writing emails all morning”.',ex:[['I have painted two walls.','Pomalowałam dwie ściany (wynik: dwie).'],['I have been painting all day.','Maluję cały dzień (proces/czas).']]},
{h:'6. Stative verbs – ostrożnie',p:'Z know, believe, own, belong i podobnymi stanami zwykle wybieramy Present Perfect Simple, a nie Continuous.',ex:[['I have known her for five years.','Znam ją od pięciu lat.']]}
],qs:[
['I ___ for two hours. (study)',['have been studying','has been studying','have studying','am been studying'],0,'I + have been + studying.'],
['She ___ all day. (work)',['has been working','have been working','is been working','has working'],0,'She + has been + -ing.'],
['How long ___ you been waiting?',['have','has','are','do'],0,'Have you been waiting…?'],
['My hands are dirty. I ___ in the garden.',['have been working','work every day','has worked','am work'],0,'Widoczny efekt niedawnej czynności.'],
['They have been playing ___ 9 a.m.',['since','for','ago','during'],0,'9 a.m. wskazuje moment rozpoczęcia.'],
['We have been practising ___ three weeks.',['for','since','ago','at'],0,'Three weeks = okres czasu.'],
['I have ___ working all morning.',['been','be','being','was'],0,'Perfect Continuous zawsze zawiera been.'],
['I have written five messages. Co podkreśla zdanie?',['wynik: pięć wiadomości','tylko proces pisania','stałą rutynę','plan na przyszłość'],0,'Liczba pięciu wiadomości wskazuje wynik.'],
['I have been writing for hours. Co podkreśla zdanie?',['czas trwania czynności','liczbę napisanych wiadomości','plan podróży','stały fakt naukowy'],0,'For hours akcentuje długość.'],
['I ___ her since primary school. (know)',['have known','have been knowing','am knowing','has known'],0,'Know to czasownik statyczny: have known.']
]},
{title:'Wszystkie czasy razem',subtitle:'Rozpoznawanie i zadania typu maturalnego',icon:'🎓',intro:'Teraz zbierz wszystko razem. Nie strzelaj: przy każdej odpowiedzi zastanów się, co autor chciał podkreślić.',sections:[
{h:'1. Cztery pytania, które pomagają wybrać czas',p:'Czy to nawyk/fakt? → Present Simple. Czy dzieje się teraz/jest tymczasowe? → Present Continuous. Czy liczy się doświadczenie/rezultat? → Present Perfect Simple. Czy najważniejszy jest czas trwania/proces? → Present Perfect Continuous.'},
{h:'2. Spójrz na sens, nie tylko na słówko',p:'Today może pasować do Continuous („I am working today”) lub Perfect („I have finished two tasks today”). Since też występuje z obiema formami Perfect.',ex:[['I usually cook, but I am ordering food today.','Zwykle gotuję, ale dziś zamawiam jedzenie.'],['I have cooked three meals today.','Ugotowałam dziś trzy posiłki.'],['I have been cooking all afternoon.','Gotuję całe popołudnie.']]},
{h:'3. Miniściąga: zdanie, pytanie, przeczenie',p:'Simple: She works / Does she work? / She doesn’t work. Continuous: She is working / Is she working? / She isn’t working. Perfect Simple: She has worked / Has she worked? / She hasn’t worked. Perfect Continuous: She has been working / Has she been working? / She hasn’t been working.'},
{h:'4. Wskazówki maturalne',p:'Zwróć uwagę na kontekst całej wypowiedzi, odpowiedzi w dialogu, III formę, końcówki -s i -ing, oraz since/for. Pamiętaj, że niektóre zdania bez kontekstu mogą dopuszczać więcej niż jeden czas.'}
],qs:[
['My dad ___ coffee every morning.',['drinks','is drinking','has been drinking now','drinking'],0,'Every morning oznacza rutynę.'],
['Listen! Someone ___ at the door.',['is knocking','knocks every week','has knock','knocking'],0,'Listen! sugeruje czynność w tej chwili.'],
['I ___ that film three times so far.',['have seen','am seeing','see every day','have been seeing'],0,'Liczba doświadczeń i so far: Perfect Simple.'],
['She is exhausted because she ___ all afternoon.',['has been running','runs every weekend','run','has running'],0,'Zmęczenie po długiej aktywności: Perfect Continuous.'],
['We ___ each other since 2020. (know)',['have known','have been knowing','are knowing','knows'],0,'Know to stative verb i połączenie z teraźniejszością.'],
['He ___ for his exam at the moment.',['is studying','studies every day','has studied last year','study'],0,'At the moment: Continuous.'],
['___ you ever travelled by plane?',['Have','Has','Are','Do'],0,'Doświadczenie: Have you ever…?'],
['Look at the wet ground. It ___ .',['has been raining','rains usually','rain','is rain'],0,'Ślad po wcześniejszej aktywności wskazuje Perfect Continuous.'],
['The Earth ___ around the Sun.',['moves','is moving only today','have moved','moving'],0,'Ogólny fakt: Present Simple.'],
['My train ___ at 6:40 tomorrow. (rozkład jazdy)',['leaves','leave','is leave','has left'],0,'Rozkłady jazdy: Present Simple.'],
['I ___ two chapters today. (wynik)',['have read','have been reading','am read','reads'],0,'Wynik: dwa rozdziały.'],
['How long ___ you been learning English?',['have','has','do','are'],0,'Pytanie o czas trwania: Have you been…?'],
['She ___ about her holiday right now.',['is thinking','thinks usually','has thinking','think'],0,'Thinking about to trwający proces rozważania.'],
['He ___ football on Fridays.',['plays','is playing now','have played','playing'],0,'On Fridays oznacza regularność.'],
['They ___ in this city for ten years. (live; stan nadal trwa)',['have lived','are living yesterday','lives','have live'],0,'Have lived podkreśla stan trwający od przeszłości do dziś.']
]}
];

import {GiBlackKnightHelm, GiSportMedal} from "react-icons/gi"
import {RiComputerLine, RiNetflixFill, RiSoundcloudLine, RiTrainLine} from "react-icons/ri"

const timelineColors = {
    life:'#d62828',
    school:'#4ecdc4',
    work:'#4361ee',
    religion:'#ff6d00'
}

const about = {
    hobbies:[
        {
            icon:<GiBlackKnightHelm/>,
            name:'historia'
        },
        {
            icon:<RiComputerLine/>,
            name:'www'
        },
        {
            icon:<GiSportMedal/>,
            name:'sporty walki'
        },
        {
            icon:<RiNetflixFill/>,
            name:'seriale'
        },
        {
            icon:<RiSoundcloudLine/>,
            name:'muzyka'
        },
        {
            icon:<RiTrainLine/>,
            name:'podróże'
        },
    ],
    timeline:[
        {
            color:timelineColors.life,
            content:'Urodziłem się 9 października 2000 roku w śremskim szpitalu imienia Tadeusza Malińskiego.',
            date:'09.10.2000',
            id:1,
            title:'Urodziny'
        },
        {
            color:timelineColors.religion,
            content:'Chrzest w kościele pw. św. Michała Archanioła w Błociszewie z rąk ks. kan. Władysława Łuczaka.',
            date:'09.11.2000',
            id:2,
            title:'Chrzest'
        },
        {
            color:timelineColors.school,
            content:'Nauka w podstawówce w Manieczkach. Wtedy to odkryłem zainteresowanie historią, spektaklami i komputerami.',
            date:'09.2007 - 06.2013',
            id:3,
            title:'Szkoła podstawowa im. gen. Józefa Wybickiego w Manieczkach'
        },
        {
            color:timelineColors.religion,
            content:'Wstąpienie w szeregi ministrantów w parafii pw. św. Michała Archanioła w Błociszewie.',
            date:'14.06.2008',
            id:4,
            title:'Początek ministrantury'
        },
        {
            color:timelineColors.religion,
            content:'Pierwsze przeczytane przeze mnie publiczne czytanie lekcji podczas niedzielnej mszy.',
            date:'04.09.2010',
            id:5,
            title:'Zostanie lektorem'
        },
        {
            color:timelineColors.school,
            content:'Ostatni etap edukacji w Manieczkach, który nie wspomniam szczególnie pozytywnie. I od momentu zakończenia tego fragmentu życia przybrałem krytyczny do edukacji publicznej szczególnie na wioskach.',
            date:'09.2013 - 06.2016',
            id:6,
            title:'Gimnazjum im. św. Jana Pawła II w Manieczkach'
        },
        {
            color:timelineColors.religion,
            content:'Bierzmowanie z rąk JE. ks. abp. Stanisława Gądeckiego w moim parafialnym kościele pw. św. Michała Archanioła w Błociszewie',
            date:'09.03.2016',
            id:7,
            title:'Bierzmowanie'
        },
        {
            color:timelineColors.religion,
            content:'Przewodniczenie ministrantom w parafii w Błociszewie. W trakcie tego czasu, ale także po nim, udało się przeprowadzić kilka kopernikańskich przewrotów liturgicznych.',
            date:'04.2016 - 09.2018',
            id:8,
            title:'Prezes ministrantów'
        },
        {
            color:timelineColors.school,
            content:'Edukacja w Katolickim Publicznym Akademickim Liceum Ogólnokształcącym im. św. Jana Pawła II w Śremie na profilu matematyczno-fizyczno-informatyczno-historycznym. W tejże szkole poznałem wiele fascynujących osób, które żyją swoimi pasjami. Wielu nauczcieli w przysłowiowym "katolu" zaraża pasją do swoich przedmiotów oraz pasjami.',
            date:'09.2016 - 05.2019',
            id:9,
            title:'KPALO w Śremie'
        },
        {
            color:timelineColors.religion,
            content:'Zostałem ceremoniarzem Archidiecezji Poznańskiej po kursie w Konarzewie prowadzonym przez ks. Adama Pieckenhagena. Błogosławieństwo do tej funkcji otrzymałem z rąk ks. bp. Damiana Bryla w poznańskiej katedrze.',
            date:'28.10.2017',
            id:10,
            title:'Ceremoniarz'
        },
        {
            color:timelineColors.life,
            content:'Zdobycie prawa jazdy, po zdaniu egzaminu teoretycznego w Wojewódzkim Ośrodku Ruchu Drogowego w Poznaniu, oraz zdaniu egzaminu praktycznego w WORD w Lesznie.',
            date:'21.12.2018',
            id:11,
            title:'Prawo jazdy'
        },
        {
            color:timelineColors.school,
            content:'Edukacja na roku propedeutycznym w Wyższym Arcybiskupim Seminarium Duchownym w Poznaniu we wsi Nadziejewo, która znajduje się nie opodal Środy Wielkopolskiej.',
            date:'1-23.10.2019',
            id:12,
            title:'ASD Poznań'
        },
        {
            color:timelineColors.school,
            content:'Pierwsze podejście do nauki w szkole policealnej "Cosinus" w Poznaniu na kierunku technik administracji. W trakcie uczęszczania do tej szkoły odbyłem miesięczne praktyki zawodowe w swoim ulubionym liceum.',
            date:'10.2019 - 06.2020',
            id:13,
            title:'Cosinus'
        },
        {
            color:timelineColors.school,
            content:'Pobyt na postulacie u Księży Zgromadzenia świętego Michała Archanioła we wsi Pawlikowice, która znajduje się kilka kilometrów od powszechnie znanej Wieliczki.',
            date:'27.09.2020 - 16.02.2021',
            id:14,
            title:'Michalici'
        },
        {
            color:timelineColors.work,
            content:'Praca na stanowisku pozycjonera w firmie Sunrise System, gdzie poznałem techniki pozycjonowania stron internetowych w wyszukiwarce Google.',
            date:'10.2021 - 01.2022',
            id:15,
            title:'Sunrise System'
        },
        {
            color:timelineColors.school,
            content:'Ponowne podejście do edukacji na kierunku technik administracji w szkole policealnej Cosinus.',
            date:'25.09.2021',
            id:16,
            title:'Cosinus'
        },
    ]

}

export default about;
import HobbyItem from '../../atom/AboutPage/HobbyItem';
import React from 'react';
import Text from '../../atom/AboutPage/Text';
import TitleSection from '../../atom/AboutPage/TitleSection';
import {hobbies} from '../../../data/hobbies';
const Hobbies = () => {
    return(
        <section>
            <div>
                <TitleSection 
                    title='Hobby i zainteresowania'
                />
                <Text>
                    Posiadam bardzo bogatą paletę zainteresowań. Swoje hobby koncentruję głównie wokół historii oraz szeroko rozumianego webdevelopmentu. W historii uwielbiam to, że nie jednokrotnie można ją dotkąnąć poprzez stare budowle oraz starszych ludzi, którzy chociażby pamiętają piekło II wojny światowej. Z kolei to co fascynuje mnie w stronach internetowych to cała kwestia wizualna, marketing oraz to co dzieje się pod przysłowiową poszewką. Jednak to nie wszystko z moich sfer, którymi się interesuję, ponieważ lubię ponadto sporty walki, w szczególności wrestling, seriale historyczne, polityczne oraz ze świata League of Legends, jednak na pierwszym miejscu w moim sercu plasuje się "Ranczo". Kolejnymi zainteresowaniami jest ogólna wiedza powszechna, geopolityka oraz podróże po Polsce. Pragnę jeszcze zaznaczyć, że lubię również w gry takie jak Assasin's Creed, Civilization czy też Farming Simulator. Co do preferencji muzycznych to optuję za tym co wpadnie mi w ucho. Ostatnio słucham soundtracki z serii gier traktującej o konflikcie między asasynami a templariuszami, Kwiatu Jabłoni oraz Sound'n'Grace.
                </Text>
            </div>
            <div>
                {
                    hobbies.map(i =>
                        <HobbyItem
                            icon={i.icon}
                            title={i.name}
                        />
                    )
                }
            </div>
        </section>
    )
}
export default Hobbies;
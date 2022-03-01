import React from "react";
import {RiFacebookFill,RiInstagramLine,RiGithubLine,RiLinkedinFill} from 'react-icons/ri';
import {FaYoutube} from 'react-icons/fa';
export const socials = [
        {
            color:'#1877f2',
            icon:<RiFacebookFill/>,
            path:'https://www.facebook.com/RadWeb-Programowanie-i-SEO-103383665586914',
            title:'Facebook'
        },
        {
            color:'#ffdc7d',
            icon:<RiInstagramLine/>,
            path:'https://www.instagram.com/radoslawadamczyk2000/',
            title:'Instagram'
        },
        {
            color:' #ff0000',
            icon:<FaYoutube/>,
            path:'https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog',
            title:'YouTube'
        },
        {
            color:'#ffffff',
            icon:<RiGithubLine/>,
            path:'https://github.com/RadoslawAdamczyk2000',
            title:'Github'
        },
        {
            color:'#f0b6a8',
            icon:<RiLinkedinFill/>,
            path:'https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/',
            title:'Linkedin'
        }
]

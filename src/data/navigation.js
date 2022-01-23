import React from "react";
import {RiFacebookFill,RiInstagramLine,RiSnapchatLine,RiTwitterLine,RiGithubLine,RiLinkedinFill} from 'react-icons/ri';
import {FaTiktok, FaYoutube} from 'react-icons/fa';

const navigation = {
    menu:[
        {
            name:'start',
            path:'/'
        },
        {
            name:'o mnie',
            path:'/about'
        },
        {
            name:'blog',
            path:'/blog'
        },
        {
            name:'projekty',
            path:'/projects'
        },
        {
            name:'oferta',
            path:'/offer'
        },
        {
            name:'kontakt',
            path:'/contact'
        },
    ],
    socials:[
        {
            icon:<RiFacebookFill/>,
            name:'Facebook',
            path:'https://www.facebook.com/RadWeb-Programowanie-i-SEO-103383665586914'
        },
        {
            icon:<RiInstagramLine/>,
            name:'Instagram',
            path:'https://www.instagram.com/radoslawadamczyk2000/'
        },
        {
            icon:<FaYoutube/>,
            name:'YouTube',
            path:'https://www.youtube.com/channel/UCOHB1fpEKwxhjCEDNgVLEog'
        },
        {
            icon:<RiGithubLine/>,
            name:'Github',
            path:'https://github.com/RadoslawAdamczyk2000'
        },
        {
            icon:<FaTiktok/>,
            name:'TikTok',
            path:'https://l.facebook.com/l.php?u=https%3A%2F%2Fvm.tiktok.com%2FZM8njyPgN%2F%3Ffbclid%3DIwAR0l79e1KketWbPMaAvUCYO2o6j6cvwpmCuHCbpx2etBuZrFTcV7FCExMc4&h=AT0kyww4hJjhwn6djcRxgzoXAq7fhJlVfLkNtDXEBNvgAW6_hFI16RHvOkzEakMx4-Nz8QlSJbOmeQGEspO14eEVuD1j7kRWz7kq5TQ80ofrJ7fRwMGxFtYJ1ibDew'
        },
        {
            icon:<RiSnapchatLine/>,
            name:'Snapchat',
            path:'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.snapchat.com%2Fadd%2Fradamczyk2000%3Fshare_id%3DIJrNLp2SRYc%26locale%3Dpl-PL%26fbclid%3DIwAR3PdZ1sgJt6g6_usI0KAFr_fRVm-1iRTKMZa8J4V_whuud8l4ZX0mDI2bk&h=AT0kyww4hJjhwn6djcRxgzoXAq7fhJlVfLkNtDXEBNvgAW6_hFI16RHvOkzEakMx4-Nz8QlSJbOmeQGEspO14eEVuD1j7kRWz7kq5TQ80ofrJ7fRwMGxFtYJ1ibDew'
        },
        {
            icon:<RiTwitterLine/>,
            name:'Twitter',
            path:'https://twitter.com/rad_web2000'
        },
        {
            icon:<RiLinkedinFill/>,
            name:'Linkedin',
            path:'https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/'
        },
    ]
}

export default navigation;
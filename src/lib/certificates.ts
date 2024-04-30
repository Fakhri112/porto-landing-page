import fcFrontend from '$lib/image/certificate/fc-frontend.png';
import fcResponsive from '$lib/image/certificate/fc-responsive.png';
import fcBackend from '$lib/image/certificate/fc-backend.png';
import fcQa from '$lib/image/certificate/fc-qa.png';
import hrFrontend from '$lib/image/certificate/hr-frontend.png';
import hrReact from '$lib/image/certificate/hr-react.png';
import magang from '$lib/image/certificate/magang.png';
import stupen from '$lib/image/certificate/stupen.png';
import cat from '$lib/image/cat.jpg'; 
let certificateList = [
    {
        id: "certif-id-1",
        credentialLink:
            "https://www.freecodecamp.org/certification/Muhammad-Fakhree/front-end-development-libraries",
        image: fcFrontend,
    },
    {
        id: "certif-id-2",
        credentialLink:
            "https://www.freecodecamp.org/certification/Muhammad-Fakhree/responsive-web-design",
        image: fcResponsive,
    },
    {
        id: "certif-id-3",
        credentialLink:
            "https://www.freecodecamp.org/certification/Muhammad-Fakhree/back-end-development-and-apis",
        image: fcBackend,
    },
    {
        id: "certif-id-4",
        credentialLink:
            "https://www.freecodecamp.org/certification/Muhammad-Fakhree/quality-assurance-v7",
        image: fcQa,
    },
    {
        id: "certif-id-5",
        credentialLink: "https://www.hackerrank.com/certificates/eee668f56509",
        image: hrFrontend,
    },
    {
        id: "certif-id-6",
        credentialLink: "https://www.hackerrank.com/certificates/ebfd1ffbd1f5",
        image: hrReact,
    },
    {
        id: "certif-id-7",
        credentialLink: "",
        image: magang,
    },
    {
        id: "certif-id-8",
        credentialLink: "",
        image: stupen,
    },
    {
        id: "certif-id-9",
        credentialLink: "",
        image: cat,
    },
];

export {certificateList}
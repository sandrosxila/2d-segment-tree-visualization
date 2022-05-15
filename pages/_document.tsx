import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Yellowtail&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
                { /* Web-Page Arrangement */ }
                <script src="lib/jquery-3.4.1.slim.min.js" defer></script>
                <script src="lib/popper.min.js" defer></script>
                <script src="lib/bootstrap.min.js" defer></script>
                <script src="scripts/dom-script.js" type="text/javascript" defer></script>

                { /* Three JS Libraries */ }
                <script type="text/javascript" src="lib/three.js" defer></script>
                <script type="text/javascript" src="lib/OrbitControls.js" defer></script>
                <script type="text/javascript" src="lib/three.interaction.js" defer></script>
                <script type="text/javascript" src="lib/dat.gui.module.js" defer></script>

                { /* Three JS Script */ }
                <script src="scripts/canvas-script.js" type="text/javascript" defer></script>
            </body>
        </Html>
    );
}
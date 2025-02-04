let interval: NodeJS.Timeout;
let timeout: NodeJS.Timeout;
let isHidden = false;
let expanded = false;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("mousemove", magicMouse);
    setInterval(() => {
        const container = document.getElementById("container");
        const venmo = document.getElementById("venmo");
        const venmoMessage = document.getElementById("venmo-message");
        const sidebar = (document.getElementsByClassName("ytlr-guide-response__container")[0]);
        const expanded = sidebar.getElementsByClassName("zylon-focus").length > 0;
        if (document.body.classList[0] === "WEB_PAGE_TYPE_ACCOUNTS" && !venmo) {
            const qrDiv = document.createElement("div");
            qrDiv.innerHTML = qrcode;
            qrDiv.id = "venmo";
            // div.style.backgroundColor = "#ff0000";
            qrDiv.style.position = "absolute";
            qrDiv.style.width = "10rem";
            qrDiv.style.height = "10rem";
            qrDiv.style.top = "4px";
            qrDiv.style.left = expanded ? "20rem" : "6.5rem";
            qrDiv.style.zIndex = "1000";

            const logoDiv = document.createElement("div");
            logoDiv.innerHTML = venmoLogo;
            logoDiv.style.marginTop = "-.4rem";
            qrDiv.appendChild(logoDiv);

            container.appendChild(qrDiv);



            const messageDiv = document.createElement("div");
            messageDiv.id = "venmo-message";
            messageDiv.style.width = "200vw";
            messageDiv.style.height = "80px";
            // messageDiv.style.backgroundColor = "#ff0000aa";
            messageDiv.style.position = "absolute";
            messageDiv.style.top = "0";
            messageDiv.style.left = "10rem";
            messageDiv.style.overflow = "hidden";
            const innerDiv = document.createElement("div");
            innerDiv.innerHTML = `Written by Garrett Corbin x https://jgarrettcorbin.com | If you like my application and find it useful, please help an independent developer out.`
            innerDiv.style.position = "absolute";
            innerDiv.style.left = "0";
            innerDiv.style.top = "0";
            innerDiv.style.fontFamily = '"YTSans", "Roboto", "Noto Sans CJK ZH-HK", "Noto Sans Thai", "Arial", "Helvetica", sans-serif';
            innerDiv.style.fontSize = "2.375rem";
            messageDiv.appendChild(innerDiv);
            qrDiv.appendChild(messageDiv);
            clearInterval(interval);
            setTimeout(() => {

                interval = setInterval(() => {
                    const getLeft = +getComputedStyle(innerDiv).left.split("px")[0];
                    if (getLeft <= -1000) {
                        innerDiv.style.left = "0px";
                    } else {
                        innerDiv.style.left = (getLeft - 1).toString() + "px";
                    }
                }, 100);
            }, 1000);


        } else if (document.body.classList[0] !== "WEB_PAGE_TYPE_ACCOUNTS") {
            clearInterval(interval);
        }
        if (venmo) {
            venmo.style.left = expanded ? "20rem" : "6.5rem";
        }
        // if (venmoMessage) {
        //     venmoMessage.style.left = expanded ? "20rem" : "6.5rem";
        // }
        // if (venmoMessage && !scrollInterval) {
        //     scrollInterval = setInterval(() => {
        //         console.log(venmoMessage.getBoundingClientRect().left);
        //     }, 100);
        // }

    }, 200)
});

function magicMouse() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
        if (!isHidden) {
            document.querySelector("html").style.cursor = "none";

            isHidden = true;
        }
    }, 5000);
    if (isHidden) {
        document.querySelector("html").style.cursor = "auto";

        isHidden = false;
    }
};

const venmoLogo = `
                <svg width="10rem" height="1.4rem" viewBox="0 -6 211 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.5771 0.822021C35.9974 3.16733 36.6377 5.58301 36.6377 8.63451C36.6377 18.3672 28.3277 31.0107 21.5832 39.8888H6.17825L0 2.95296L13.4887 1.67258L16.7552 27.9548C19.8074 22.9834 23.5738 15.171 23.5738 9.84453C23.5738 6.92902 23.0743 4.94318 22.2935 3.30806L34.5771 0.822021Z" fill="#ffffff"/>
                <path d="M52.0595 17.0887C54.5417 17.0887 60.7907 15.9534 60.7907 12.4024C60.7907 10.6973 59.5848 9.84676 58.1637 9.84676C55.6776 9.84676 52.415 12.8275 52.0595 17.0887ZM51.7751 24.1214C51.7751 28.4573 54.1865 30.1584 57.3834 30.1584C60.8647 30.1584 64.1979 29.3078 68.5303 27.1065L66.8985 38.1852C63.846 39.6763 59.0888 40.6713 54.4713 40.6713C42.7584 40.6713 38.5664 33.5693 38.5664 24.6908C38.5664 13.1834 45.3853 0.9646 59.4436 0.9646C67.1837 0.9646 71.5117 5.30013 71.5117 11.3371C71.5124 21.0695 59.0188 24.051 51.7751 24.1214Z" fill="#ffffff"/>
                <path d="M110.439 9.34835C110.439 10.7687 110.224 12.8289 110.009 14.1753L105.962 39.7474H92.8275L96.5196 16.3059C96.5896 15.6701 96.8048 14.3901 96.8048 13.6799C96.8048 11.9747 95.7393 11.5493 94.4583 11.5493C92.7568 11.5493 91.0513 12.3298 89.9155 12.8997L85.7278 39.7477H72.5195L78.5537 1.46185H89.9855L90.1302 4.51773C92.8272 2.74224 96.3785 0.822022 101.417 0.822022C108.093 0.821292 110.439 4.2319 110.439 9.34835Z" fill="#ffffff"/>
                <path d="M149.432 5.15577C153.194 2.45936 156.746 0.9646 161.643 0.9646C168.387 0.9646 170.733 4.37521 170.733 9.49167C170.733 10.9121 170.518 12.9723 170.304 14.3187L166.261 39.8907H153.123L156.886 15.9538C156.955 15.3139 157.101 14.5334 157.101 14.0383C157.101 12.1184 156.035 11.6926 154.754 11.6926C153.123 11.6926 151.492 12.4028 150.281 13.043L146.094 39.8911H132.96L136.722 15.9541C136.791 15.3143 136.933 14.5338 136.933 14.0387C136.933 12.1188 135.866 11.693 134.59 11.693C132.885 11.693 131.183 12.4735 130.047 13.0434L125.856 39.8915H112.652L118.686 1.60552H129.978L130.333 4.80176C132.96 2.88628 136.508 0.966057 141.265 0.966057C145.384 0.964599 148.08 2.74045 149.432 5.15577Z" fill="#ffffff"/>
                <path d="M196.869 16.3076C196.869 13.1821 196.087 11.0512 193.746 11.0512C188.563 11.0512 187.498 20.2133 187.498 24.9003C187.498 28.456 188.493 30.6566 190.834 30.6566C195.733 30.6566 196.869 20.9942 196.869 16.3076ZM174.15 24.3345C174.15 12.2608 180.539 0.963379 195.238 0.963379C206.314 0.963379 210.363 7.49985 210.363 16.522C210.363 28.4556 204.043 40.814 188.989 40.814C177.842 40.814 174.15 33.497 174.15 24.3345Z" fill="#ffffff"/>
                </svg>
                `

const qrcode = `
<?xml version="1.0" encoding="utf-8"?>
<svg width="10rem" height="10rem" viewBox="0 0 296 296"
		 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events">
<rect x="0" y="0" width="296" height="296" fill="#ffffff00"/>
<defs>
<rect id="p" width="8" height="8"/>
</defs>
<g fill="#ffffff">
<use xlink:href="#p" x="32" y="32"/>
<use xlink:href="#p" x="32" y="40"/>
<use xlink:href="#p" x="32" y="48"/>
<use xlink:href="#p" x="32" y="56"/>
<use xlink:href="#p" x="32" y="64"/>
<use xlink:href="#p" x="32" y="72"/>
<use xlink:href="#p" x="32" y="80"/>
<use xlink:href="#p" x="32" y="96"/>
<use xlink:href="#p" x="32" y="112"/>
<use xlink:href="#p" x="32" y="128"/>
<use xlink:href="#p" x="32" y="136"/>
<use xlink:href="#p" x="32" y="152"/>
<use xlink:href="#p" x="32" y="208"/>
<use xlink:href="#p" x="32" y="216"/>
<use xlink:href="#p" x="32" y="224"/>
<use xlink:href="#p" x="32" y="232"/>
<use xlink:href="#p" x="32" y="240"/>
<use xlink:href="#p" x="32" y="248"/>
<use xlink:href="#p" x="32" y="256"/>
<use xlink:href="#p" x="40" y="32"/>
<use xlink:href="#p" x="40" y="80"/>
<use xlink:href="#p" x="40" y="96"/>
<use xlink:href="#p" x="40" y="128"/>
<use xlink:href="#p" x="40" y="136"/>
<use xlink:href="#p" x="40" y="152"/>
<use xlink:href="#p" x="40" y="160"/>
<use xlink:href="#p" x="40" y="184"/>
<use xlink:href="#p" x="40" y="192"/>
<use xlink:href="#p" x="40" y="208"/>
<use xlink:href="#p" x="40" y="256"/>
<use xlink:href="#p" x="48" y="32"/>
<use xlink:href="#p" x="48" y="48"/>
<use xlink:href="#p" x="48" y="56"/>
<use xlink:href="#p" x="48" y="64"/>
<use xlink:href="#p" x="48" y="80"/>
<use xlink:href="#p" x="48" y="104"/>
<use xlink:href="#p" x="48" y="120"/>
<use xlink:href="#p" x="48" y="136"/>
<use xlink:href="#p" x="48" y="160"/>
<use xlink:href="#p" x="48" y="176"/>
<use xlink:href="#p" x="48" y="208"/>
<use xlink:href="#p" x="48" y="224"/>
<use xlink:href="#p" x="48" y="232"/>
<use xlink:href="#p" x="48" y="240"/>
<use xlink:href="#p" x="48" y="256"/>
<use xlink:href="#p" x="56" y="32"/>
<use xlink:href="#p" x="56" y="48"/>
<use xlink:href="#p" x="56" y="56"/>
<use xlink:href="#p" x="56" y="64"/>
<use xlink:href="#p" x="56" y="80"/>
<use xlink:href="#p" x="56" y="120"/>
<use xlink:href="#p" x="56" y="136"/>
<use xlink:href="#p" x="56" y="144"/>
<use xlink:href="#p" x="56" y="152"/>
<use xlink:href="#p" x="56" y="168"/>
<use xlink:href="#p" x="56" y="176"/>
<use xlink:href="#p" x="56" y="192"/>
<use xlink:href="#p" x="56" y="208"/>
<use xlink:href="#p" x="56" y="224"/>
<use xlink:href="#p" x="56" y="232"/>
<use xlink:href="#p" x="56" y="240"/>
<use xlink:href="#p" x="56" y="256"/>
<use xlink:href="#p" x="64" y="32"/>
<use xlink:href="#p" x="64" y="48"/>
<use xlink:href="#p" x="64" y="56"/>
<use xlink:href="#p" x="64" y="64"/>
<use xlink:href="#p" x="64" y="80"/>
<use xlink:href="#p" x="64" y="104"/>
<use xlink:href="#p" x="64" y="112"/>
<use xlink:href="#p" x="64" y="120"/>
<use xlink:href="#p" x="64" y="152"/>
<use xlink:href="#p" x="64" y="208"/>
<use xlink:href="#p" x="64" y="224"/>
<use xlink:href="#p" x="64" y="232"/>
<use xlink:href="#p" x="64" y="240"/>
<use xlink:href="#p" x="64" y="256"/>
<use xlink:href="#p" x="72" y="32"/>
<use xlink:href="#p" x="72" y="80"/>
<use xlink:href="#p" x="72" y="96"/>
<use xlink:href="#p" x="72" y="112"/>
<use xlink:href="#p" x="72" y="128"/>
<use xlink:href="#p" x="72" y="168"/>
<use xlink:href="#p" x="72" y="176"/>
<use xlink:href="#p" x="72" y="208"/>
<use xlink:href="#p" x="72" y="256"/>
<use xlink:href="#p" x="80" y="32"/>
<use xlink:href="#p" x="80" y="40"/>
<use xlink:href="#p" x="80" y="48"/>
<use xlink:href="#p" x="80" y="56"/>
<use xlink:href="#p" x="80" y="64"/>
<use xlink:href="#p" x="80" y="72"/>
<use xlink:href="#p" x="80" y="80"/>
<use xlink:href="#p" x="80" y="96"/>
<use xlink:href="#p" x="80" y="112"/>
<use xlink:href="#p" x="80" y="128"/>
<use xlink:href="#p" x="80" y="144"/>
<use xlink:href="#p" x="80" y="160"/>
<use xlink:href="#p" x="80" y="176"/>
<use xlink:href="#p" x="80" y="192"/>
<use xlink:href="#p" x="80" y="208"/>
<use xlink:href="#p" x="80" y="216"/>
<use xlink:href="#p" x="80" y="224"/>
<use xlink:href="#p" x="80" y="232"/>
<use xlink:href="#p" x="80" y="240"/>
<use xlink:href="#p" x="80" y="248"/>
<use xlink:href="#p" x="80" y="256"/>
<use xlink:href="#p" x="88" y="96"/>
<use xlink:href="#p" x="88" y="120"/>
<use xlink:href="#p" x="88" y="128"/>
<use xlink:href="#p" x="88" y="136"/>
<use xlink:href="#p" x="88" y="144"/>
<use xlink:href="#p" x="88" y="152"/>
<use xlink:href="#p" x="88" y="160"/>
<use xlink:href="#p" x="88" y="168"/>
<use xlink:href="#p" x="88" y="176"/>
<use xlink:href="#p" x="88" y="184"/>
<use xlink:href="#p" x="88" y="192"/>
<use xlink:href="#p" x="96" y="56"/>
<use xlink:href="#p" x="96" y="64"/>
<use xlink:href="#p" x="96" y="80"/>
<use xlink:href="#p" x="96" y="104"/>
<use xlink:href="#p" x="96" y="112"/>
<use xlink:href="#p" x="96" y="128"/>
<use xlink:href="#p" x="96" y="136"/>
<use xlink:href="#p" x="96" y="144"/>
<use xlink:href="#p" x="96" y="152"/>
<use xlink:href="#p" x="96" y="192"/>
<use xlink:href="#p" x="96" y="200"/>
<use xlink:href="#p" x="96" y="208"/>
<use xlink:href="#p" x="96" y="216"/>
<use xlink:href="#p" x="96" y="248"/>
<use xlink:href="#p" x="96" y="256"/>
<use xlink:href="#p" x="104" y="32"/>
<use xlink:href="#p" x="104" y="48"/>
<use xlink:href="#p" x="104" y="72"/>
<use xlink:href="#p" x="104" y="88"/>
<use xlink:href="#p" x="104" y="96"/>
<use xlink:href="#p" x="104" y="112"/>
<use xlink:href="#p" x="104" y="128"/>
<use xlink:href="#p" x="104" y="160"/>
<use xlink:href="#p" x="104" y="184"/>
<use xlink:href="#p" x="104" y="208"/>
<use xlink:href="#p" x="104" y="216"/>
<use xlink:href="#p" x="104" y="240"/>
<use xlink:href="#p" x="104" y="248"/>
<use xlink:href="#p" x="112" y="32"/>
<use xlink:href="#p" x="112" y="48"/>
<use xlink:href="#p" x="112" y="56"/>
<use xlink:href="#p" x="112" y="64"/>
<use xlink:href="#p" x="112" y="72"/>
<use xlink:href="#p" x="112" y="80"/>
<use xlink:href="#p" x="112" y="96"/>
<use xlink:href="#p" x="112" y="104"/>
<use xlink:href="#p" x="112" y="120"/>
<use xlink:href="#p" x="112" y="128"/>
<use xlink:href="#p" x="112" y="136"/>
<use xlink:href="#p" x="112" y="160"/>
<use xlink:href="#p" x="112" y="168"/>
<use xlink:href="#p" x="112" y="176"/>
<use xlink:href="#p" x="112" y="184"/>
<use xlink:href="#p" x="112" y="200"/>
<use xlink:href="#p" x="112" y="216"/>
<use xlink:href="#p" x="112" y="224"/>
<use xlink:href="#p" x="112" y="240"/>
<use xlink:href="#p" x="120" y="32"/>
<use xlink:href="#p" x="120" y="40"/>
<use xlink:href="#p" x="120" y="48"/>
<use xlink:href="#p" x="120" y="56"/>
<use xlink:href="#p" x="120" y="112"/>
<use xlink:href="#p" x="120" y="120"/>
<use xlink:href="#p" x="120" y="184"/>
<use xlink:href="#p" x="120" y="192"/>
<use xlink:href="#p" x="120" y="224"/>
<use xlink:href="#p" x="120" y="240"/>
<use xlink:href="#p" x="120" y="248"/>
<use xlink:href="#p" x="120" y="256"/>
<use xlink:href="#p" x="128" y="40"/>
<use xlink:href="#p" x="128" y="64"/>
<use xlink:href="#p" x="128" y="80"/>
<use xlink:href="#p" x="128" y="88"/>
<use xlink:href="#p" x="128" y="96"/>
<use xlink:href="#p" x="128" y="112"/>
<use xlink:href="#p" x="128" y="136"/>
<use xlink:href="#p" x="128" y="152"/>
<use xlink:href="#p" x="128" y="160"/>
<use xlink:href="#p" x="128" y="176"/>
<use xlink:href="#p" x="128" y="200"/>
<use xlink:href="#p" x="128" y="216"/>
<use xlink:href="#p" x="128" y="224"/>
<use xlink:href="#p" x="128" y="240"/>
<use xlink:href="#p" x="136" y="32"/>
<use xlink:href="#p" x="136" y="64"/>
<use xlink:href="#p" x="136" y="72"/>
<use xlink:href="#p" x="136" y="88"/>
<use xlink:href="#p" x="136" y="128"/>
<use xlink:href="#p" x="136" y="136"/>
<use xlink:href="#p" x="136" y="144"/>
<use xlink:href="#p" x="136" y="152"/>
<use xlink:href="#p" x="136" y="176"/>
<use xlink:href="#p" x="136" y="200"/>
<use xlink:href="#p" x="136" y="208"/>
<use xlink:href="#p" x="136" y="216"/>
<use xlink:href="#p" x="136" y="224"/>
<use xlink:href="#p" x="144" y="32"/>
<use xlink:href="#p" x="144" y="48"/>
<use xlink:href="#p" x="144" y="56"/>
<use xlink:href="#p" x="144" y="64"/>
<use xlink:href="#p" x="144" y="72"/>
<use xlink:href="#p" x="144" y="80"/>
<use xlink:href="#p" x="144" y="96"/>
<use xlink:href="#p" x="144" y="104"/>
<use xlink:href="#p" x="144" y="120"/>
<use xlink:href="#p" x="144" y="128"/>
<use xlink:href="#p" x="144" y="136"/>
<use xlink:href="#p" x="144" y="144"/>
<use xlink:href="#p" x="144" y="152"/>
<use xlink:href="#p" x="144" y="160"/>
<use xlink:href="#p" x="144" y="176"/>
<use xlink:href="#p" x="144" y="184"/>
<use xlink:href="#p" x="144" y="208"/>
<use xlink:href="#p" x="152" y="32"/>
<use xlink:href="#p" x="152" y="40"/>
<use xlink:href="#p" x="152" y="56"/>
<use xlink:href="#p" x="152" y="64"/>
<use xlink:href="#p" x="152" y="96"/>
<use xlink:href="#p" x="152" y="120"/>
<use xlink:href="#p" x="152" y="144"/>
<use xlink:href="#p" x="152" y="152"/>
<use xlink:href="#p" x="152" y="160"/>
<use xlink:href="#p" x="152" y="168"/>
<use xlink:href="#p" x="152" y="176"/>
<use xlink:href="#p" x="152" y="200"/>
<use xlink:href="#p" x="152" y="208"/>
<use xlink:href="#p" x="152" y="216"/>
<use xlink:href="#p" x="152" y="232"/>
<use xlink:href="#p" x="152" y="240"/>
<use xlink:href="#p" x="160" y="48"/>
<use xlink:href="#p" x="160" y="72"/>
<use xlink:href="#p" x="160" y="80"/>
<use xlink:href="#p" x="160" y="120"/>
<use xlink:href="#p" x="160" y="128"/>
<use xlink:href="#p" x="160" y="152"/>
<use xlink:href="#p" x="160" y="160"/>
<use xlink:href="#p" x="160" y="184"/>
<use xlink:href="#p" x="160" y="200"/>
<use xlink:href="#p" x="160" y="216"/>
<use xlink:href="#p" x="160" y="224"/>
<use xlink:href="#p" x="160" y="232"/>
<use xlink:href="#p" x="160" y="240"/>
<use xlink:href="#p" x="160" y="248"/>
<use xlink:href="#p" x="168" y="32"/>
<use xlink:href="#p" x="168" y="56"/>
<use xlink:href="#p" x="168" y="64"/>
<use xlink:href="#p" x="168" y="96"/>
<use xlink:href="#p" x="168" y="104"/>
<use xlink:href="#p" x="168" y="128"/>
<use xlink:href="#p" x="168" y="144"/>
<use xlink:href="#p" x="168" y="160"/>
<use xlink:href="#p" x="168" y="168"/>
<use xlink:href="#p" x="168" y="192"/>
<use xlink:href="#p" x="168" y="208"/>
<use xlink:href="#p" x="168" y="240"/>
<use xlink:href="#p" x="168" y="256"/>
<use xlink:href="#p" x="176" y="40"/>
<use xlink:href="#p" x="176" y="48"/>
<use xlink:href="#p" x="176" y="64"/>
<use xlink:href="#p" x="176" y="72"/>
<use xlink:href="#p" x="176" y="80"/>
<use xlink:href="#p" x="176" y="88"/>
<use xlink:href="#p" x="176" y="96"/>
<use xlink:href="#p" x="176" y="104"/>
<use xlink:href="#p" x="176" y="136"/>
<use xlink:href="#p" x="176" y="144"/>
<use xlink:href="#p" x="176" y="168"/>
<use xlink:href="#p" x="176" y="208"/>
<use xlink:href="#p" x="176" y="216"/>
<use xlink:href="#p" x="176" y="232"/>
<use xlink:href="#p" x="176" y="240"/>
<use xlink:href="#p" x="176" y="248"/>
<use xlink:href="#p" x="184" y="64"/>
<use xlink:href="#p" x="184" y="88"/>
<use xlink:href="#p" x="184" y="104"/>
<use xlink:href="#p" x="184" y="120"/>
<use xlink:href="#p" x="184" y="136"/>
<use xlink:href="#p" x="184" y="152"/>
<use xlink:href="#p" x="184" y="160"/>
<use xlink:href="#p" x="184" y="176"/>
<use xlink:href="#p" x="184" y="184"/>
<use xlink:href="#p" x="184" y="192"/>
<use xlink:href="#p" x="184" y="208"/>
<use xlink:href="#p" x="184" y="224"/>
<use xlink:href="#p" x="184" y="232"/>
<use xlink:href="#p" x="184" y="240"/>
<use xlink:href="#p" x="184" y="256"/>
<use xlink:href="#p" x="192" y="40"/>
<use xlink:href="#p" x="192" y="48"/>
<use xlink:href="#p" x="192" y="56"/>
<use xlink:href="#p" x="192" y="64"/>
<use xlink:href="#p" x="192" y="72"/>
<use xlink:href="#p" x="192" y="80"/>
<use xlink:href="#p" x="192" y="96"/>
<use xlink:href="#p" x="192" y="112"/>
<use xlink:href="#p" x="192" y="120"/>
<use xlink:href="#p" x="192" y="128"/>
<use xlink:href="#p" x="192" y="136"/>
<use xlink:href="#p" x="192" y="152"/>
<use xlink:href="#p" x="192" y="168"/>
<use xlink:href="#p" x="192" y="184"/>
<use xlink:href="#p" x="192" y="192"/>
<use xlink:href="#p" x="192" y="200"/>
<use xlink:href="#p" x="192" y="208"/>
<use xlink:href="#p" x="192" y="216"/>
<use xlink:href="#p" x="192" y="224"/>
<use xlink:href="#p" x="192" y="240"/>
<use xlink:href="#p" x="200" y="120"/>
<use xlink:href="#p" x="200" y="128"/>
<use xlink:href="#p" x="200" y="176"/>
<use xlink:href="#p" x="200" y="184"/>
<use xlink:href="#p" x="200" y="192"/>
<use xlink:href="#p" x="200" y="224"/>
<use xlink:href="#p" x="200" y="232"/>
<use xlink:href="#p" x="200" y="240"/>
<use xlink:href="#p" x="200" y="248"/>
<use xlink:href="#p" x="208" y="32"/>
<use xlink:href="#p" x="208" y="40"/>
<use xlink:href="#p" x="208" y="48"/>
<use xlink:href="#p" x="208" y="56"/>
<use xlink:href="#p" x="208" y="64"/>
<use xlink:href="#p" x="208" y="72"/>
<use xlink:href="#p" x="208" y="80"/>
<use xlink:href="#p" x="208" y="112"/>
<use xlink:href="#p" x="208" y="120"/>
<use xlink:href="#p" x="208" y="128"/>
<use xlink:href="#p" x="208" y="136"/>
<use xlink:href="#p" x="208" y="144"/>
<use xlink:href="#p" x="208" y="168"/>
<use xlink:href="#p" x="208" y="176"/>
<use xlink:href="#p" x="208" y="184"/>
<use xlink:href="#p" x="208" y="192"/>
<use xlink:href="#p" x="208" y="208"/>
<use xlink:href="#p" x="208" y="224"/>
<use xlink:href="#p" x="208" y="240"/>
<use xlink:href="#p" x="208" y="256"/>
<use xlink:href="#p" x="216" y="32"/>
<use xlink:href="#p" x="216" y="80"/>
<use xlink:href="#p" x="216" y="104"/>
<use xlink:href="#p" x="216" y="112"/>
<use xlink:href="#p" x="216" y="120"/>
<use xlink:href="#p" x="216" y="128"/>
<use xlink:href="#p" x="216" y="136"/>
<use xlink:href="#p" x="216" y="152"/>
<use xlink:href="#p" x="216" y="168"/>
<use xlink:href="#p" x="216" y="184"/>
<use xlink:href="#p" x="216" y="192"/>
<use xlink:href="#p" x="216" y="224"/>
<use xlink:href="#p" x="216" y="240"/>
<use xlink:href="#p" x="216" y="256"/>
<use xlink:href="#p" x="224" y="32"/>
<use xlink:href="#p" x="224" y="48"/>
<use xlink:href="#p" x="224" y="56"/>
<use xlink:href="#p" x="224" y="64"/>
<use xlink:href="#p" x="224" y="80"/>
<use xlink:href="#p" x="224" y="96"/>
<use xlink:href="#p" x="224" y="104"/>
<use xlink:href="#p" x="224" y="112"/>
<use xlink:href="#p" x="224" y="136"/>
<use xlink:href="#p" x="224" y="168"/>
<use xlink:href="#p" x="224" y="176"/>
<use xlink:href="#p" x="224" y="184"/>
<use xlink:href="#p" x="224" y="192"/>
<use xlink:href="#p" x="224" y="200"/>
<use xlink:href="#p" x="224" y="208"/>
<use xlink:href="#p" x="224" y="216"/>
<use xlink:href="#p" x="224" y="224"/>
<use xlink:href="#p" x="224" y="240"/>
<use xlink:href="#p" x="224" y="256"/>
<use xlink:href="#p" x="232" y="32"/>
<use xlink:href="#p" x="232" y="48"/>
<use xlink:href="#p" x="232" y="56"/>
<use xlink:href="#p" x="232" y="64"/>
<use xlink:href="#p" x="232" y="80"/>
<use xlink:href="#p" x="232" y="96"/>
<use xlink:href="#p" x="232" y="120"/>
<use xlink:href="#p" x="232" y="144"/>
<use xlink:href="#p" x="232" y="160"/>
<use xlink:href="#p" x="232" y="176"/>
<use xlink:href="#p" x="232" y="200"/>
<use xlink:href="#p" x="232" y="208"/>
<use xlink:href="#p" x="232" y="224"/>
<use xlink:href="#p" x="232" y="232"/>
<use xlink:href="#p" x="232" y="240"/>
<use xlink:href="#p" x="232" y="248"/>
<use xlink:href="#p" x="232" y="256"/>
<use xlink:href="#p" x="240" y="32"/>
<use xlink:href="#p" x="240" y="48"/>
<use xlink:href="#p" x="240" y="56"/>
<use xlink:href="#p" x="240" y="64"/>
<use xlink:href="#p" x="240" y="80"/>
<use xlink:href="#p" x="240" y="104"/>
<use xlink:href="#p" x="240" y="144"/>
<use xlink:href="#p" x="240" y="152"/>
<use xlink:href="#p" x="240" y="160"/>
<use xlink:href="#p" x="240" y="168"/>
<use xlink:href="#p" x="240" y="192"/>
<use xlink:href="#p" x="240" y="208"/>
<use xlink:href="#p" x="240" y="232"/>
<use xlink:href="#p" x="240" y="240"/>
<use xlink:href="#p" x="240" y="248"/>
<use xlink:href="#p" x="240" y="256"/>
<use xlink:href="#p" x="248" y="32"/>
<use xlink:href="#p" x="248" y="80"/>
<use xlink:href="#p" x="248" y="104"/>
<use xlink:href="#p" x="248" y="136"/>
<use xlink:href="#p" x="248" y="168"/>
<use xlink:href="#p" x="248" y="192"/>
<use xlink:href="#p" x="248" y="216"/>
<use xlink:href="#p" x="248" y="224"/>
<use xlink:href="#p" x="248" y="240"/>
<use xlink:href="#p" x="256" y="32"/>
<use xlink:href="#p" x="256" y="40"/>
<use xlink:href="#p" x="256" y="48"/>
<use xlink:href="#p" x="256" y="56"/>
<use xlink:href="#p" x="256" y="64"/>
<use xlink:href="#p" x="256" y="72"/>
<use xlink:href="#p" x="256" y="80"/>
<use xlink:href="#p" x="256" y="128"/>
<use xlink:href="#p" x="256" y="136"/>
<use xlink:href="#p" x="256" y="152"/>
<use xlink:href="#p" x="256" y="168"/>
<use xlink:href="#p" x="256" y="176"/>
<use xlink:href="#p" x="256" y="192"/>
<use xlink:href="#p" x="256" y="224"/>
<use xlink:href="#p" x="256" y="232"/>
<use xlink:href="#p" x="256" y="248"/>
</g>
<g></g></svg>`
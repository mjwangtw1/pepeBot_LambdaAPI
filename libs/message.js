/**
 * 隨機
 */
function Message()
{
    //圖片訊息
    function imageFormat(imgUrl){
        return {
            type: 'image',
            originalContentUrl: imgUrl,
            previewImageUrl: imgUrl
        };
    }

    //貼圖訊息
    function stickerFormat(packageId, stickerId){
        return {
            type: 'sticker',
            packageId: packageId,
            stickerId: stickerId
        };
    }

    //特殊的badge訊息
    function flexBadge(flexMessage, title, Highlight, messageBelow){
        return {
            type: "flex",
            altText: flexMessage,
            contents:
                {
                    "type": "bubble",
                    "size": "small",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": title,
                                "color": "#ffffff",
                                "align": "start",
                                "size": "md",
                                "gravity": "center"
                            },
                            {
                                "type": "text",
                                "text": Highlight,
                                "color": "#ffffff",
                                "align": "start",
                                "size": "lg",
                                "gravity": "center",
                                "margin": "lg"
                            },
                        ],
                        "backgroundColor": "#27ACB2",
                        "paddingTop": "19px",
                        "paddingAll": "12px",
                        "paddingBottom": "16px"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "我大pepe尼感嘴?",
                                        "color": "#8C8C8C",
                                        "size": "sm",
                                        "wrap": true
                                    }
                                ],
                                "flex": 1
                            }
                        ],
                        "spacing": "md",
                        "paddingAll": "12px"
                    },
                    "styles": {
                        "footer": {
                            "separator": false
                        }
                    }
                }
        };
    }

    return {
        image : imageFormat,
        sticker: stickerFormat,
        badge: flexBadge
    }
}
module.exports = new Message();
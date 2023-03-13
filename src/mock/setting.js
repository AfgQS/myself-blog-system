import Mock from "mockjs";
import avatar from "@/assets/avatar.png";
import weixinQrCode from "@/assets/weixinQrCode.jpg";
import qqQrCode from "@/assets/qqQrCode.jpg";

Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar,
        siteTitle: "小璩的博客",
        github: "https://github.com/AfgQS",
        qq: "2725432838",
        qqQrCode,
        weixin: "Tau-a_Apr29",
        weixinQrCode,
        mail: "2725432838@qq.com",
        githubName: "AfgQS",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})
<template>
  <div id="home">
    <!-- 头部 -->
    <div class="header">
      <div class="bg-color">
        <div class="user">
          <h1 ref="prompt"></h1>
          <div class="user-img" v-if="isLogin">
            <img :src="userImgShow" alt="" @click="handleRoute" />
          </div>
          <div class="user-operation" v-else>
            <el-button
              class="elbutton"
              type="warning"
              @click="handleRegist"
              style="margin-left: 16px"
              >注册</el-button
            >
            <el-button
              class="elbutton"
              type="danger"
              @click="login = true"
              style="margin-left: 16px"
              >登录</el-button
            >
          </div>
        </div>
        <el-drawer
          title="账号注册"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose"
          ref="regist"
        >
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="昵称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="账号" prop="userId">
              <el-input v-model="ruleForm.userId"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <a href="" class="post-img"
              >上传头像<input type="file" id="userImg" @change="show"
            /></a>
            <img :src="userImg" alt="" id="uImg" class="post-img-show" />
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <!--  -->
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-drawer>

        <el-drawer
          title="登录"
          :visible.sync="login"
          :direction="topDirection"
          :before-close="handleClose"
        >
          <el-form
            :model="ruleLogin"
            status-icon
            :rules="rules"
            ref="ruleLogin"
            label-width="100px"
            class="demo-ruleForm user-login"
          >
            <el-form-item label="账号" prop="loginUserId">
              <el-input v-model="ruleLogin.loginUserId"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="loginPass" class="user-pass">
              <el-input
                type="password"
                v-model="ruleLogin.loginPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item class="user-login-btn">
              <el-button type="primary" @click="submitFormLogin('ruleLogin')"
                >登录</el-button
              >
              <el-button @click="resetFormLogin('ruleLogin')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-drawer>

        <div class="down">
          <img src="../assets/img/arrow_down.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 内容区 -->

    <div class="main">
      <directory
        :theme="this.culture"
        :introduction="this.cultureInt"
        :showList="this.cultureList"
      />
      <directory
        :theme="this.cultureProvice"
        :introduction="this.cultureIntProvice"
        :showList="this.cultureListProvice"
      />
      <directory
        :theme="this.cultureCity"
        :introduction="this.cultureIntCity"
        :showList="this.cultureListCity"
      />
    </div>

    <el-divider></el-divider>
    <BMap />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Directory from "../components/Directory";
import Footer from "../components/Footer";
import * as loginService from "../service/loginService";
import * as registService from "../service/registService";
import BMap from "../components/BMap";
// 图片上传api
import * as uploadService from "../service/uploadService";
// import "//api.map.baidu.com/api?type=webgl&v=1.0&ak=4uvmYBrZrc8rb6qNGSHfwITn1GdZnIkM";
export default {
  data() {
    let checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateUserId = (rule, value, callback) => {
      if (!value) {
        callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (value < 1000000) {
          callback(new Error("账号必须大于7位"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      // 注册,登录验证规则
      rules: {
        userId: [{ validator: validateUserId, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }],
        loginUserId: [{ validator: validateUserId, trigger: "blur" }],
        loginPass: [{ validator: validatePass, trigger: "blur" }],
      },
      // 注册
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        userId: "",
      },
      // 用户头像
      userImg: null,
      userImgShow: null,
      // 登录
      ruleLogin: {
        loginUserId: "",
        loginPass: "",
      },
      // 是否登录
      isLogin: false,

      drawer: false,
      login: false,
      direction: "ltr",
      topDirection: "ltr",
      // 组件props

      //安康市国家级项目
      culture: "安康非遗之国家级代表项目",
      cultureInt:
        "安康共有4个国家级非物质文化遗产保护项目，分别是：汉调二黄、紫阳民歌、平利弦子腔、旬阳民歌。",
      cultureList: [
        {
          showImg: require(".././../../mock/img/汉调二黄.jpeg"),
          title: "汉调二簧",
          time: "2003",
          content:
            "汉调二黄——起源于古都长安，因梨园法曲的二黄派以黄幡绰为首，最擅长之节目为黄冠体调，故称二黄腔。明末清初以“西秦腔二犯（二黄）”流传各地。清初期盛行于陕西安康、汉中、商洛等地。",
          // 折叠面板drawerList
        },
        {
          showImg: require(".././../../mock/img/平利玄子.jpeg"),
          title: "平利弦子腔",
          time: "2008",
          content:
            "平利弦子腔——弦子戏，又名弦子腔，属高腔体系。因主要是以弦胡伴奏，唱腔中又是用喊腔吆号子，故名弦子腔，其表演形式是皮影戏。",
        },
        {
          showImg: require(".././../../mock/img/紫阳民歌.jpeg"),
          title: "茶歌紫阳",
          time: "2006",
          content:
            "紫阳民歌——流传在陕西省安康市紫阳县境内的民间歌曲的总称，是陕南地区民歌中最具代表性的民歌之一。紫阳民歌分为号子、山歌、小调、风俗歌曲、花鼓八岔、孝歌和新民歌等十几个种类",
          drawerList: [
            {
              drawerTitle: "汉调二簧",
              drawerSpecialty:
                "该剧种历史上在陕西的发展和繁荣，曾形成有安康、汉中、商镇、关中等四大流派，班社众多，名角层出不穷。汉调二黄在全国皮簧戏中重要的历史地位所决定的，它对于各地皮黄戏的史学研究与艺术发展，都具有深远的影响和不可磨灭的历史价值",
              drawerImg: require("../../../mock/img/hd.png"),
              drawerImgTitle: "汉调二簧",
              drawerImgCon:
                "该剧种历史上在陕西的发展和繁荣，曾形成有安康、汉中、商镇、关中等四大流派，班社众多，名角层出不穷。",
            },
            {
              drawerTitle: "平利弦子腔",
              drawerSpecialty:
                "平利弦子腔，又名弦子戏，因用弦胡主奏而得名，音乐属板腔体。自清嘉庆年间产生以来，以平利县为中心，活动在安康、旬阳、岚皋、镇坪、白河及湖北房、竹地区，保存剧目八百多个",
              drawerImg: require("../../../mock/img/xianzi1.jpg"),
              drawerImgTitle: "平利弦子腔",
              drawerImgCon:
                "弦子腔深植民间，唱民间喜怒哀乐，“大戏”、“小戏”，台上台下，各种场合都能适应，人们在传承的过程中，博采众长，相互交融，不断地丰富了自己的艺术表现力，这种广泛的适应性，正是弦子腔在戏曲音乐中独树一帜",
            },
            {
              drawerTitle: "紫阳茶歌",
              drawerSpecialty:
                "紫阳民歌是流传在陕西省紫阳县境内传统民间歌曲的总称，是陕南地区传统民歌中最具代表的曲种。它语言形象生动，曲调优美动听，具有鲜明的艺术特色和地方风格，是紫阳当地劳动人民人民在长期劳动中创造出来流传至今的艺术瑰宝。专辑代表：樊光安《巴山汉水情》、合辑《紫阳茶歌》等。紫阳民歌剧：《王二嫁嫂》、《茶山情》等。",
              drawerImg: require("../../../mock/img/chage1.png"),
              drawerImgTitle: "紫阳茶歌",
              drawerImgCon:
                "风俗歌曲是流传较广的民间口头文艺形式，是一种即兴创作歌曲，见啥唱啥，想啥唱啥，是反映紫阳人民生活习俗的歌曲，是紫阳民间举行婚丧嫁娶等各种仪式时所唱的歌曲；",
            },
          ],
          pictShowList: [
            {
              title: "汉调二簧图一",
              introP:
                "该剧种历史上在陕西的发展和繁荣，曾形成有安康、汉中、商镇、关中等四大流派，班社众多，名角层出不穷。",
              imgSrc: require("../../../mock/img/hd.png"),
            },
            {
              title: "汉调二簧图二",
              introP:
                "近十多年来却不断走向衰落，目前仅存安康汉滨区一个剧团维系演出，其他各地均已绝迹，使其成为当前须尽快予以抢救保护的一个重要地方剧种。",
              imgSrc: require("../../../mock/img/hd2.png"),
            },
            {
              title: "汉调二簧图三",
              introP:
                "老一辈人的匠人精神， 努力演好每一场，是对艺术的尊重，也是对后辈的启示",
              imgSrc: require("../../../mock/img/hd3.png"),
            },
            {
              title: "汉调二簧图四",
              introP:
                "这是由汉调二黄在全国皮簧戏中重要的历史地位所决定的，它对于各地皮黄戏的史学研究与艺术发展，都具有深远的影响和不可磨灭的历史价值。",
              imgSrc: require("../../../mock/img/hd4.png"),
            },
            {
              title: "汉调二簧图五",
              introP:
                "汉调二簧是陕西第二大剧种，流行于陕西的安康、汉中、商雒、西安及四川、甘肃、湖北的部分地区。它源自陕南汉江流域的山歌、牧歌、民歌，清代初叶受秦腔影响",
              imgSrc: require("../../../mock/img/hd5.png"),
            },
            {
              title: "汉调二簧图六",
              introP:
                "并吸收昆曲、吹腔、高拨子等曲调，糅合当地方言，形成了独立的声腔剧种，原来用双笛伴奏，笛以竹作“簧”，故称“二簧”。",
              imgSrc: require("../../../mock/img/hd6.png"),
            },
            {
              title: "汉调二簧图七",
              introP:
                "为与“京二簧”区别，又称“土二簧”。汉调二簧在发展中曾形成安康、汉中、商雒、关中等流派，名角层出不穷。",
              imgSrc: require("../../../mock/img/hd7.png"),
            },
            {
              title: "平利弦子腔图一",
              introP:
                "平利弦子腔，又名弦子戏，因用弦胡主奏而得名，音乐属板腔体。自清嘉庆年间产生以来，以平利县为中心，活动在安康、旬阳、岚皋、镇坪、白河及湖北房、竹地区，保存剧目八百多个",
              imgSrc: require("../../../mock/img/xianzi1.jpg"),
            },
            {
              title: "平利弦子腔图二",
              introP:
                "弦子腔以陕西省平利县为中心，流传于安康、旬阳、岚皋、镇坪、白河等县及湖北地区。弦子腔起初为民间说唱形式，后经改造加工搬上皮影戏舞台",
              imgSrc: require("../../../mock/img/xianzi2.jpg"),
            },
            {
              title: "平利弦子腔图三",
              introP:
                "号子喊起来，声音嘹亮悦耳，烘托性强，具有突出的表现力和感染力，显示出浓郁的乡野风情。",
              imgSrc: require("../../../mock/img/xianzi3.jpg"),
            },
            {
              title: "平利弦子腔图四",
              introP:
                "弦子腔深植民间，唱民间喜怒哀乐，“大戏”、“小戏”，台上台下，各种场合都能适应，人们在传承的过程中，博采众长，相互交融，不断地丰富了自己的艺术表现力，这种广泛的适应性，正是弦子腔在戏曲音乐中独树一帜",
              imgSrc: require("../../../mock/img/xianzi4.jpg"),
            },
            {
              title: "平利弦子腔图五",
              introP:
                "汉调二簧是陕西第二大剧种，流行于陕西的安康、汉中、商雒、西安及四川、甘肃、湖北的部分地区。它源自陕南汉江流域的山歌、牧歌、民歌，清代初叶受秦腔影响",
              imgSrc: require("../../../mock/img/xianzi5.jpg"),
            },
            {
              title: "平利弦子腔图六",
              introP:
                "传统平利弦子腔以皮影戏为主要表现形式。“玩子班”坐唱式则不加表演;现代弦子腔保留其调式特点，丰富了伴奏音乐，使弦子戏更加完美。",
              imgSrc: require("../../../mock/img/xianzi6.png"),
            },
            {
              title: "紫阳茶歌图一",
              introP:
                "紫阳民歌是紫阳人民在长期的生产、生活、劳动中创造的，无论是词或曲都能体现当地的易风易俗，明白晓畅，通俗易懂。",
              imgSrc: require("../../../mock/img/chage1.png"),
            },
            {
              title: "紫阳茶歌图二",
              introP:
                "紫阳民歌受南北遗民文化的影响较大，极具兼容性，小调似江南的婉转细腻，号子有北方的雄浑高亢。",
              imgSrc: require("../../../mock/img/chage2.png"),
            },
            {
              title: "紫阳茶歌图三",
              introP:
                "紫阳民歌语言简洁，借喻巧成，风趣幽默，具抒情性、叙事性、舞蹈性于一体。",
              imgSrc: require("../../../mock/img/chage3.png"),
            },
            {
              title: "紫阳茶歌图四",
              introP:
                "紫阳民歌韵白独特，旋律流畅，音乐上采用了“宫”、“商”、“羽”、“徽”四种调式，演唱上真、假嗓相结合",
              imgSrc: require("../../../mock/img/chage4.png"),
            },
            {
              title: "紫阳茶歌图五",
              introP:
                "紫阳民歌流传久远，其歌词借喻巧妙，风趣幽默，有较高的文学价值；所用方言似川、似楚，韵味独具；其旋律优美婉转，高腔唱法中游移于调式音级间的色彩性颤音唱法具有独特的价值",
              imgSrc: require("../../../mock/img/chage5.png"),
            },
            {
              title: "紫阳茶歌图六",
              introP:
                "紫阳民歌的传承直接依托于各种民俗活动，反映出丰富的民俗文化内容。紫阳民歌对于丰富中华民族音乐宝库、弘扬中华民族音乐文化有不可低估的作用",
              imgSrc: require("../../../mock/img/chage6.png"),
            },
          ],
        },
        // 安康市省级项目
      ],
      // 安康市省级项目
      cultureProvice: "安康非遗之省级代表项目",
      cultureIntProvice:
        "省级非物质文化遗产安康代表作项目有八岔戏、蜀河太平灯、旬阳道情皮影戏、汉滨区龙舟风俗等，入选代表作具有浓郁的地域特色。",
      cultureListProvice: [
        {
          showImg: require(".././../../mock/img/八岔戏.png"),
          title: "八岔戏",
          time: "2019-02-01",
          content:
            "唱腔上分为阳八岔和阴八岔。八岔戏的常用乐器有柿饼鼓、锣等，总体音色明快热烈而不尖利，柔和圆润而不低沉。小生的表演运用了整冠、圆领等戏曲程式；旦角的表演基本保留了民间歌舞小场子的身段、台步；丑角的表演无固定程式，多为即兴表演",
        },
        {
          showImg: require(".././../../mock/img/蜀河灯.jpg"),
          title: "蜀河太平灯",
          time: "2019-07-29",
          content:
            "太平灯是蜀河民间社火的传统项目，所谓“太平灯”就是烧狮子，也叫火狮子。据记载明末嘉靖年间已经出现了这一传统习俗，每逢新春佳节，民间自发组织人力财力，兴高采烈地扎花灯、闹社火、烧狮子，寄托了人们对来年红火美好生活的祝福。",
        },
        {
          showImg: require(".././../../mock/img/旬阳道戏.jpg"),
          title: "旬阳道情皮影戏",
          time: "2019-3-28",
          content:
            "据1987年10月出版的《旬阳县戏剧志》记载，旬阳县自明末清初就开始演出道情戏，班社众多，艺人辈出。到了清末民国初期，旬阳各地都有道情戏班社常年演出。目前，我县仍有10余个班社活跃在乡镇演出。",
          drawerList: [
            {
              drawerTitle: "八岔戏",
              drawerSpecialty:
                "八岔戏角色分为生、旦、丑三门九行当，其中以小生、小旦、小丑戏居多。八岔戏剧目丰富，本戏少，折戏多，题材多为表现男欢女爱和劳动生活中的轶闻趣事。其代表性剧目有《站花墙》、《蔡鸣凤辞店》、《王婆骂鸡》、《蓝桥挑水》、《贾金莲赶船》等。八岔戏的唱腔和音乐伴奏不动丝竹，全凭锣鼓乐“掌其节奏，齐其动作，鼓其精神”。",
              drawerImg: require("../../../mock/img/8chaxi.png"),
              drawerImgTitle: "八岔戏",
              drawerImgCon:
                "八岔戏形成于清乾隆、嘉庆年间，随着两湖移民的大量涌入，郧阳调传入安康汉滨，经过艺人们的吸收改造，逐渐形成了具有柏腔体雏形的八岔戏。",
            },
            {
              drawerTitle: "蜀河太平灯",
              drawerSpecialty:
                "蜀河镇古有“小汉口”美称，今被誉为“汉江岸边小明珠”，是中国历史文化名镇。这里人文历史悠久，八方商贾云集，五方杂处，经济繁荣;南北文化交融，名胜古迹各异。特殊的历史造就特殊的文化，蜀河镇具有非常独特的民俗节庆文化。",
              drawerImg: require("../../../mock/img/shu2.jpg"),
              drawerImgTitle: "蜀河太平灯",
              drawerImgCon:
                "太平灯是蜀河民间社火的传统项目，所谓“太平灯”就是烧狮子，也叫火狮子。",
            },
            {
              drawerTitle: "旬阳道情皮影戏",
              drawerSpecialty:
                "旬阳人文历史悠久厚重。远在六、七千年以前，就有先民在这里繁衍生息，境内考古发现多处新石器时代的文化遗址。秦时设关，西汉置县的旬阳，因处于楚秦蜀交界地带，其荆襄文化、巴蜀文化、汉水文化、南北文化兼容并蓄，文化底蕴十分深厚。曾被誉为陕南的小戏之乡、民歌之乡。",
              drawerImg: require("../../../mock/img/piyin2.jpg"),
              drawerImgTitle: "旬阳道情皮影戏",
              drawerImgCon:
                "　据1987年10月出版的《旬阳县戏剧志》记载，旬阳县自明末清初就开始演出道情戏，班社众多，艺人辈出。到了清末民国初期，旬阳各地都有道情戏班社常年演出。目前，我县仍有10余个班社活跃在乡镇演出.",
            },
          ],
          pictShowList: [
            {
              title: "八岔戏图一",
              introP:
                "八岔戏形成于清乾隆、嘉庆年间，随着两湖移民的大量涌入，郧阳调传入安康汉滨，经过艺人们的吸收改造，逐渐形成了具有柏腔体雏形的八岔戏。",
              imgSrc: require("../../../mock/img/8chaxi.png"),
            },
            {
              title: "八岔戏图二",
              introP:
                "八岔戏角色分为生、旦、丑三门九行当，其中以小生、小旦、小丑戏居多。八岔戏剧目丰富，本戏少，折戏多，题材多为表现男欢女爱和劳动生活中的轶闻趣事。",
              imgSrc: require("../../../mock/img/8chaxi2.png"),
            },
            {
              title: "八岔戏图三",
              introP:
                "其代表性剧目有《站花墙》、《蔡鸣凤辞店》、《王婆骂鸡》、《蓝桥挑水》、《贾金莲赶船》等。八岔戏的唱腔和音乐伴奏不动丝竹，全凭锣鼓乐“掌其节奏，齐其动作，鼓其精神”。",
              imgSrc: require("../../../mock/img/8chaxi3.png"),
            },
            {
              title: "八岔戏图四",
              introP:
                "腔上分为阳八岔和阴八岔。八岔戏的常用乐器有柿饼鼓、锣等，总体音色明快热烈而不尖利，柔和圆润而不低沉.",
              imgSrc: require("../../../mock/img/8chaxi4.png"),
            },
            {
              title: "八岔戏图五",
              introP:
                "小生的表演运用了整冠、圆领等戏曲程式；旦角的表演基本保留了民间歌舞小场子的身段、台步；丑角的表演无固定程式，多为即兴表演。",
              imgSrc: require("../../../mock/img/8chaxi5.png"),
            },
            {
              title: "八岔戏图六",
              introP:
                "现在，八岔戏已被列入陕西省第一批非物质文化遗产代表作保护名录。",
              imgSrc: require("../../../mock/img/8chaxi6.png"),
            },
            {
              title: "八岔戏图七",
              introP:
                "八岔戏，又称“七岔戏”“花鼓戏”“小调戏”“岔口戏”，是流传在陕西省安康市的一个新创的汉族戏曲剧种。八岔戏是安康土生土长的艺术与外省流入的民间艺术融汇、衍化、丰富发展起来的。",
              imgSrc: require("../../../mock/img/8chaxi7.png"),
            },
            {
              title: "蜀河太平灯图一",
              introP:
                "旬阳县蜀河镇地处两省三县交界处，古称“淯溪”，是北出关中，南抵湘鄂，西通川渝的古代官道要冲。蜀河镇古有“小汉口”美称，今被誉为“汉江岸边小明珠”，是中国历史文化名镇",
              imgSrc: require("../../../mock/img/蜀河灯.jpg"),
            },
            {
              title: "蜀河太平灯图二",
              introP:
                "　太平灯是蜀河民间社火的传统项目，所谓“太平灯”就是烧狮子，也叫火狮子。据记载明末嘉靖年间已经出现了这一传统习俗",
              imgSrc: require("../../../mock/img/shu2.jpg"),
            },
            {
              title: "蜀河太平灯图三",
              introP:
                "每逢新春佳节，民间自发组织人力财力，兴高采烈地扎花灯、闹社火、烧狮子。从正月初六开始到十六结束，在蜀河大街小巷巡回表演玩耍，社火经过之处，爆竹声声，锣鼓喧天，人山人海，气氛热烈",
              imgSrc: require("../../../mock/img/shu3.jpg"),
            },
            {
              title: "蜀河太平灯图四",
              introP:
                "狮子的寓意也极为深远，自古以来是中华民族高洁威猛的象征;火花四溅的花子，寄托了人们对来年红火美好生活的祝福。",
              imgSrc: require("../../../mock/img/shu4.jpg"),
            },
            {
              title: "蜀河太平灯图五",
              introP:
                "狮子的制作和玩法很有讲究。狮子制作属手工，工艺复杂，有扎、剪、折、卷、彩绘、糊、烤、烧等工序;就地取材，用龙须草或麻编结而成，狮子头多以石灰豆腐打浆逐层黏糊，硬度好不怕烧。因为安全需要，通常在烧狮子之前要将整个狮子用水喷湿",
              imgSrc: require("../../../mock/img/shu5.jpg"),
            },
            {
              title: "蜀河太平灯图六",
              introP:
                "狮子的胡须被人们视为神符，玩到家门口都要剪点胡须缝好带在小孩身上或是挂在家里一年四季可以辟邪免灾，因为这样每次玩到最后狮子的胡须都让人们抢了个精光。",
              imgSrc: require("../../../mock/img/shu6.jpg"),
            },
            {
              title: "旬阳道情皮影戏图一",
              introP:
                "道情是旬阳影戏的主要剧种，据1987年10月出版的《旬阳戏剧志》记载，道情源于唐代《承天》、《九真》等道曲，以道教故事为题材，宣扬出世思想，原为徙歌。",
              imgSrc: require("../../../mock/img/旬阳道戏.jpg"),
            },
            {
              title: "旬阳道情皮影戏图二",
              introP:
                "道情又称皮影戏、小戏儿等，主要流行在旬阳与关中语音近似的广大地域。据传，早在明崇祯年间(1628-1644)有个名叫白米虫的人将道情戏由关中带至商县并流传于安康、旬阳。",
              imgSrc: require("../../../mock/img/piyin2.jpg"),
            },
            {
              title: "旬阳道情皮影戏图三",
              introP:
                "清乾隆二十五年(1760)年，安康西路人赖世魁从关中学会道情戏，回来后建立道情皮影班，聘人整理剧目流动演出。",
              imgSrc: require("../../../mock/img/piyin3.jpg"),
            },
            {
              title: "旬阳道情皮影戏图四",
              introP:
                "自此，道情皮影戏唱风日盛，广为流传。咸丰、同治年间(1851—1874年)，旬阳的赵家班远近闻名，常年活动(《陕西戏剧志安康地区卷》记载)。",
              imgSrc: require("../../../mock/img/piyin4.jpg"),
            },
            {
              title: "旬阳道情皮影戏图五",
              introP:
                "旬阳道情曲种与关中道情曲种同为一系。系以板腔体为主，兼一当地小调和其它地方戏曲牌的一类由说唱音乐过度为“影戏”的剧种之一。",
              imgSrc: require("../../../mock/img/piying5.jpg"),
            },
            {
              title: "旬阳道情皮影戏图六",
              introP:
                "随着时代的发展，人们生产生活方式的变化，旬阳道情这一珍贵的民间艺术科目也面临着名存实亡的境地。能够演唱的艺人已是屈指可数，很多老艺人在无声无息地逝去。作为文化的携带者，他们的离去也是一种民间艺术的极大损失。因此，保护和传承旬阳道情音乐是十分必要的，也是非常紧迫的。",
              imgSrc: require("../../../mock/img/piyin6.jpg"),
            },
          ],
        },
      ],
      // 安康市市级项目
      cultureCity: "安康非遗之市级代表项目",
      cultureIntCity:
        "市级非物质文化遗产安康代表作项目有安康火龙，安康彩莲船、安康曲子、汉滨区龙舟风俗等，极具代表性的民俗凸显出安康文化的多样性。",
      cultureListCity: [
        {
          showImg: require(".././../../mock/img/安康曲子.jpg"),
          title: "安康曲子",
          time: "2019-05-09",
          content:
            "安康曲子是一种民间清唱音乐，从类型上大致可分为两类。一类是曲牌联唱体;一类是民间歌谣体。既有抒情、细腻的小曲，也有诙谐、风趣的小调。由于它的曲调大多短小精悍，好听上口，是清代中期到建国前后流行于安康恒口地区的主要曲艺品种。",
        },
        {
          showImg: require(".././../../mock/img/安康火龙.jpg"),
          title: "安康火龙",
          time: "2019-07-05",
          content:
            "安康火龙有300年以上历史，是汉滨先民薪火相传的一种民间艺术形式。用于民间祈福、节事欢愉、节日岁事、村落欢庆等。主要分布于汉滨区月河川道南北两山和安康城区一带，并辐射旬阳、汉阴、平利、岚皋、紫阳等县。",
        },
        {
          showImg: require(".././../../mock/img/汉滨区龙洲.png"),
          title: "汉滨区龙舟风俗",
          time: "2000",
          content:
            "龙舟竞渡集祭祀、祈福、竞技、斗志、争荣誉为一体，集资、祭龙舟、下水仪式、竞赛、划对头、安康龙舟竞渡文化具有追念爱国诗人屈原“奋勇向前、顽强拼搏”的社会精神、弘扬优秀传统文化价值以及学术研究、文化创新的价值。",
          drawerList: [
            {
              drawerTitle: "安康曲子",
              drawerSpecialty:
                "安康曲子是一种民间清唱音乐，从类型上大致可分为两类。一类是曲牌联唱体;一类是民间歌谣体。两类综合据传有一百零调(即108年曲牌)。既有抒情、细腻的小曲，也有诙谐、风趣的小调;还有高昂、悲怨的曲段",
              drawerImg: require("../../../mock/img/quzi2.jpg"),
              drawerImgTitle: "安康曲子",
              drawerImgCon:
                "“安康曲子”文词清雅，曲调优美，曲目丰富，音乐瑰丽。由于它的曲调大多短小精悍，好听上口，是清代中期到建国前后流行于安康恒口地区的主要曲艺品种。",
            },
            {
              drawerTitle: "安康火龙",
              drawerSpecialty:
                "安康火龙有300年以上历史，是汉滨先民薪火相传的一种民间艺术形式。用于民间祈福、节事欢愉、节日岁事、村落欢庆等。主要分布于汉滨区月河川道南北两山和安康城区一带，并辐射旬阳、汉阴、平利、岚皋、紫阳等县。",
              drawerImg: require("../../../mock/img/huolong2.jpg"),
              drawerImgTitle: "安康火龙",
              drawerImgCon:
                "安康火龙由制作龙宝、龙头、龙身、龙尾、龙衣、炸油捻、哧火筒等器具组成。习俗有洗龙、摆出龙宴、龙点睛、庙敬天地、接龙、拜主敬神、送龙归天等组成，玩火龙由摆四门、舞龙、烧龙、逗烧龙等组成。",
            },
            {
              drawerTitle: "汉滨区龙舟风俗",
              drawerSpecialty:
                "龙舟竞游自北宋成为民间水上竞技游乐活动，在明代已具规模，随着时代的演变，龙舟竞技已成为安康百姓广泛参与热爱的活动，20世纪50年代，除民间自发的龙舟竞渡外，政府也组织群众进行比赛，60年代上半期，每年有群众自发的龙舟活动。",
              drawerImg: require("../../../mock/img/lz2.png"),
              drawerImgTitle: "汉滨区龙舟风俗",
              drawerImgCon:
                "随着改革开放的不断深入和对传统文化的认识，各企业和机关单位的队伍也参加比赛，进入新世纪以后，为安康龙舟文化品牌，地方政府自2000年起已举行了七届龙舟竞渡民俗文化比赛。",
            },
          ],
          pictShowList: [
            {
              title: "安康曲子图一",
              introP:
                "安康曲子的曲牌联唱体统称“月背调”。“月背调”一般都是根据书目内容、情节、情绪配以得当的曲牌并将这些曲牌有机地联在一起。以表达曲子书目的思想主题。",
              imgSrc: require("../../../mock/img/安康曲子.jpg"),
            },
            {
              title: "安康曲子图二",
              introP:
                "但不管什么曲子书目都要以“月头”开始，“月尾”结尾。在“月头”与“月尾”之间加入各种不同的曲牌。",
              imgSrc: require("../../../mock/img/quzi2.jpg"),
            },
            {
              title: "安康曲子图三",
              introP:
                "其中主要有“背弓”、“背尾”、“慢诉”、“紧诉”、“慢钉缸”、“紧钉缸”、“银细丝”、“剪剪花、“诗篇”、“太平年”、“五更”、“哭长城”、等七十多个曲牌。",
              imgSrc: require("../../../mock/img/quzi3.jpg"),
            },
            {
              title: "安康曲子图四",
              introP:
                "有些曲目仅是“月头”与“月尾”，那么就叫“月调”。因为一般“月调”的词是八句，又叫“八句月调”。以叙事抒情的，就叫“正弓调”。“正弓调”这一类大都是民歌小调，有、“女贤良”,“上楼门”等三十多个曲牌.",
              imgSrc: require("../../../mock/img/quzi4.jpg"),
            },
            {
              title: "安康曲子图五",
              introP:
                "安康曲子的表演形式为座唱，歌者不作任何动作，而是随着曲目的情绪、音乐的起伏、或强弱、或喜或悲，“吟出来道，做好到曲尽其能，表情达意。",
              imgSrc: require("../../../mock/img/quzi5.jpg"),
            },
            {
              title: "安康曲子图六",
              introP:
                "主要伴奏是三弦，另外还有月琴、扬琴、琵琶、二胡、笛子等。打击乐有牙子板、花碟、盅子、非子(碰铃)、四块瓦等。",
              imgSrc: require("../../../mock/img/quzi6.jpg"),
            },
            {
              title: "安康曲子图七",
              introP:
                "在演唱中常常是一人唱，众人合，气氛热烈。演唱安康曲子，从来都叫“念”而不叫“唱”，文词讲究高雅有“室内雅乐”之称，传统上叫“念曲子”，不叫“唱曲子”，以示与“唱戏班子”、“伶人”的差别。",
              imgSrc: require("../../../mock/img/quzi7.jpg"),
            },
            {
              title: "安康火龙图一",
              introP:
                "火龙是仿龙的形状，用竹子、皮纸、绳索捆扎而成。它的制作过程主要是：篾匠用竹篾编制龙灯罩，由铁匠打制火捻夹子，由木匠制作龙灯托及龙杠",
              imgSrc: require("../../../mock/img/安康火龙.jpg"),
            },
            {
              title: "安康火龙图二",
              introP:
                "　由祈愿的家户出资购龙衣和挂龙衣。存放有两种方式：一是龙灯一直保存，来年只做修补;二是玩三年后龙灯全部敬天重做。",
              imgSrc: require("../../../mock/img/huolong2.jpg"),
            },
            {
              title: "安康火龙图三",
              introP:
                "龙捻制作用皮纸手工搓成绳子状，炸油捻子用木籽油或牛油、羊油，油中按比例要加松香、朝脑、砒霜等物质，需要解决油捻子燃速",
              imgSrc: require("../../../mock/img/huolong3.jpg"),
            },
            {
              title: "安康火龙图四",
              introP:
                "亮度等问题;哧火筒用火药、铁屑、玻璃屑、铜屑等制作出红、绿、黄各色花色的烟火。伴奏乐器用鼓、锣、铙三种打击响器。。",
              imgSrc: require("../../../mock/img/huolong4.jpg"),
            },
            {
              title: "安康火龙图五",
              introP:
                "安康火龙一般正月十二出灯，正月十六卸龙衣。安康火龙根据场院大小、人员多少选择7、9、11、13节龙进行玩耍。选择各节龙都有各自的寓意或说法(如11节龙就是“有衣有食”)最长的13节龙为30米。",
              imgSrc: require("../../../mock/img/huolong5.jpg"),
            },
            {
              title: "安康火龙图六",
              introP:
                "舞火龙者以各种舞姿变化以达到火龙不被点燃为胜利，观众则以燃放花筒点燃火龙为取胜。火龙舞者以“龙抬”“龙打滚”“龙摆尾”“龙行云”等组合为表演动律，耍宝人和舞龙者的表演相配合.",
              imgSrc: require("../../../mock/img/huolong6.jpg"),
            },
            {
              title: "汉滨区龙舟风俗图一",
              introP:
                "龙舟竞渡集祭祀、祈福、竞技、斗志、争荣誉为一体，集资、祭龙舟、下水仪式、竞赛、划对头、赢输笑一套程序化比赛办法。安康龙舟竞渡文化具有追念爱国诗人屈原“奋勇向前",
              imgSrc: require("../../../mock/img/汉滨区龙洲.png"),
            },
            {
              title: "汉滨区龙舟风俗图二",
              introP:
                "顽强拼搏”的社会精神、弘扬优秀传统文化价值以及学术研究、文化创新的价值。",
              imgSrc: require("../../../mock/img/lz2.png"),
            },
            {
              title: "汉滨区龙舟风俗图三",
              introP:
                "目前已形成集龙舟赛事、旅游精品销售、群众休闲娱乐于一体的民俗风情园。该园已于2005年被陕西省命为“文化产业示范基础”。",
              imgSrc: require("../../../mock/img/lz3.png"),
            },
            {
              title: "汉滨区龙舟风俗图四",
              introP:
                "龙舟竞渡是安康的一种民间民俗活动，长期演绎在汉水流域。由于安康城区长期是安康地区的最高行政机构所在地，安康的龙舟竞渡形成于安康城区，幅射和影响周边地区，形成共同的风俗。",
              imgSrc: require("../../../mock/img/lz4.png"),
            },
            {
              title: "汉滨区龙舟风俗图五",
              introP:
                "当日是农历五月初五，是中国民间的传统节日端午节。陕西省安康市第20届龙舟节在汉江上举行。每年端阳节前后，安康沿江一带的县区都举行龙舟赛，赛龙舟成为民间自发的盛大活动。",
              imgSrc: require("../../../mock/img/lz5.png"),
            },
            {
              title: "汉滨区龙舟风俗图六",
              introP:
                "十里长堤，观者如潮、参赛单位抬着吉祥物，举着彩旗，舞着狮子，踩着旱船，敲锣打鼓，汇集江岸，阵势宏大，场面壮阔。随着指挥人员一声令下，上百只龙舟在锣鼓声、呐喊声、号子声、助威声中，争先恐后，破浪向前。",
              imgSrc: require("../../../mock/img/lz6.png"),
            },
          ],
        },
      ],

      // 自动打字效果
      maxSpeed: 60, //最大输入速度
      minSpeed: 20, //最小输入速度
      textList: [
        "您有本站的账号没呢？",
        "有的话请点击右便的红框框,查阅更多丰富内容哦😄",
        "没有的话就点左边黄色框框,注册账号很快(๑•̀ㅂ•́)و✧",
      ], //输入文字集合
      listIndex: 0, //列表的索引
      indexes: 0, //光标索引
      delSpeed: 10, //删除文字速度
      cursorText: "_", //光标文字
      text: "", //当前显示的句子文字
      tempText: "", //临时句子截取文字
      wait: 2000, //文子输入完成后等待时间删除
      waitInput: 800, //等待n毫秒后开始输入
      timer: null, //定时器
      isStop: true, //是否停止
      cacheFun: null, //停止时函数记录
    };
  },
  components: {
    Directory,
    Footer,
    BMap,
  },
  computed: {
    el() {
      return this.$refs.prompt;
    },
  },
  methods: {
    // 用户头像长传 并预览
    show(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      const reader = new FileReader();
      const imgDom = document.querySelector("#uImg");
      reader.onload = function (evt) {
        imgDom.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    },
    // 头像点击跳转路由
    handleRoute() {
      this.$router.push({ name: "User" });
    },
    // 注册按钮点击事件
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        const inpFile = document.querySelector("#userImg");
        const formdata = new FormData(); // 构建form-data消息格式体
        formdata.append("img", inpFile.files[0], inpFile.files[0].name);

        uploadService.upload(formdata).then((res) => {
          if (res) {
            console.log("2");
            let urlN = res.data.data;
            // console.log(urlN);
            this.userImg = urlN;
            // this.filesNames = urlN.slice(8);
          }
        });
        if (valid) {
          let _this = this;
          setTimeout(async () => {
            const result = await registService.regist({
              name: _this.ruleForm.name,
              loginId: _this.ruleForm.userId,
              loginPwd: _this.ruleForm.pass,
              img: _this.userImg,
            });
            if (result) {
              alert("注册成功");
              this.resetForm(formName);
            }
          }, 1500);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRegist() {
      this.drawer = true;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 登录按钮点击事件
    submitFormLogin(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await this.$store.dispatch("loginUser/login", {
            loginId: this.ruleLogin.loginUserId,
            loginPwd: this.ruleLogin.loginPass,
          });
          if (result) {
            loginService.whoami().then((res) => {
              this.userImgShow = require("../../../public" + res.data.img);
            });
            alert(`${result.data.name},很高心再次见到你😄`);
            this.resetForm(formName);
            this.isLogin = true;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetFormLogin(formName) {
      this.$refs[formName].resetFields();
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    cleanTimer() {
      //清除定时器
      if (this.timer) return;
      clearTimeout(this.timer);
      this.timer = null;
    },
    getRanSpeed() {
      //获取随机停止时间
      return (
        Math.floor(Math.random() * (this.maxSpeed - this.minSpeed + 1)) +
        this.minSpeed
      );
    },
    getNowText(i) {
      //设置并获取当前文字
      this.indexes = typeof i == "number" ? i : this.indexes;
      this.tempText = this.text.substr(0, this.indexes);
      return this.tempText;
    },
    waiting(ms) {
      //等待函数
      return new Promise((resolve, reject) => {
        this.cleanTimer();
        this.timer = setTimeout(resolve, ms);
      });
    },
    render(hc) {
      //设置 ‘el’的显示文字
      this.el.innerHTML /*innerText*/ =
        this.getNowText() + (hc ? "" : this.cursorText);
    },
    backspace() {
      //循环删除
      if (this.indexes > 0) {
        this.waiting(this.delSpeed).then(() => {
          //删除
          // typing.getNowText(typing.indexes -1);
          this.indexes--;
          this.render();
          this.backspace();
        });
      } else {
        //删除完成
        if (this.listIndex >= this.textList.length) this.listIndex = 0;
        this.text = this.textList[this.listIndex];
        this.listIndex++;
        this.waiting(this.waitInput).then(this.loop); //等待输入
      }
    },
    loop() {
      if (this.text.length <= this.indexes) {
        //是显示完成
        this.render(true); //输出完成
        this.waiting(this.wait).then(this.backspace); //等待删除
      } else {
        // this.getNowText(this.indexes + 1);
        this.indexes++; //设置下一次显示的文字索引
        this.render(); //显示到页面
        this.waiting(this.getRanSpeed()).then(this.loop); //等待删除
      }
    },
    start() {
      //开始
      this.backspace();
    },

    // 滚动屏幕
  },
  mounted() {
    loginService.whoami().then((res) => {
      this.userImgShow = require("../../../public" + res.data.img);
    });
  },
  created() {
    this.start();
    const token = localStorage.getItem("token");
    if (token) {
      this.isLogin = true;
    }
  },
  watch: {
    isLogin() {
      if (this.isLogin) {
        this.el.style.fontSize = "1em";
        this.el.style.top = "150%";
        this.textList = ["看到右上角的圈圈没,点击之后你会发现更多有趣的东西😄"];
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$parent.closeNav();
    next();
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  // overflow-y: auto;
  .header {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/img/bg.png");
    background-position: center;
    .bg-color {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.575);
      .user {
        width: 100%;
        height: 15%;
        position: relative;
        top: 30%;
        .user-img {
          width: 80px;
          height: 80px;
          position: absolute;
          left: calc(50% - 3.5%);
          top: 40%;
          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid #ccc;
            box-shadow: 0 0 3px #ccc, inset 0 0 3px #ccc;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
            &:hover {
              transform: rotate(360deg);
            }
          }
        }
        h1 {
          font-size: 1.5em;
          color: #fff;
          position: relative;
          text-align: center;
          text-shadow: 3px 3px 5px rgb(255, 255, 255);
        }
        .user-operation {
          width: 30%;
          position: absolute;
          top: 130%;
          left: calc(50% - 15%);
          display: flex;
          justify-content: space-between;
          .elbutton {
            padding: 15px 30px;
          }
        }
      }
      .down {
        position: relative;
        top: 70%;
        left: calc(50% - 2.5%);
        width: 5%;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        &:hover {
          transform: scale(1.5);
        }
        img {
          width: 100%;
        }
      }
      .post-img {
        display: inline-block;
        width: 70px;
        height: 70px;
        padding: 10px;
        margin: 10px;
        position: relative;
        left: 38%;
        border-radius: 50%;
        border: 2px solid #ccc;
        font-size: 1em;
        color: rgb(138, 138, 138);
        text-align: center;
        line-height: 70px;
        input {
          opacity: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0px;
          cursor: pointer;
          padding: 10px;
          z-index: 20;
        }
      }
      .post-img-show {
        width: 87px;
        height: 87px;
        position: relative;
        top: 39px;
        left: 74px;
        border-radius: 50%;
      }
    }
  }
}
</style>

<style>
.el-form-item {
  padding-left: 0;
  width: 80%;
}
.el-form-item .el-button {
  margin-left: 50px;
}
.el-form {
  margin-top: 50px;
}
.el-drawer {
  min-width: 400px;
  position: relative;
}
</style>
<template>
  <div id="appreciate">
    <div class="appreciate-wrapper">
      <div class="appreciate-header">
        <h4>非遗项目展览</h4>
      </div>
      <div class="block">
        <el-carousel :interval="1500" type="card" height="400px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <Directory
      :theme="this.hanbinTitle"
      :introduction="this.hanbinIntro"
      :showList="this.hanbinList"
    />
    <Directory
      :theme="this.xunyangTitle"
      :introduction="this.xunyangIntro"
      :showList="this.xunyangList"
    />
    <Directory
      :theme="this.ziyangTitle"
      :introduction="this.ziyangIntro"
      :showList="this.ziyangList"
    />
    <Directory
      :theme="this.zhenpingTitle"
      :introduction="this.zhenpingIntro"
      :showList="this.zhenpingList"
    />
    <Directory
      :theme="this.pinliTitle"
      :introduction="this.pinliIntro"
      :showList="this.pinliList"
    />
    <Directory
      :theme="this.langaoTitle"
      :introduction="this.langaoIntro"
      :showList="this.hanbinList"
    />
    <Directory
      :theme="this.baiheTitle"
      :introduction="this.baiheIntro"
      :showList="this.hanbinList"
    />
    <Directory
      :theme="this.hanyinTitle"
      :introduction="this.hanyinIntro"
      :showList="this.hanbinList"
    />
    <Directory
      :theme="this.shiquanTitle"
      :introduction="this.shiquanIntro"
      :showList="this.hanbinList"
    />
    <Directory
      :theme="this.ninshanTitle"
      :introduction="this.ninshanIntro"
      :showList="this.hanbinList"
    />
    <Footer />
    <!-- <div class="picture-wrapper">
      <div class="picture-title">
        <h4></h4>
      </div>

      props:
        theme: String,
        introduction: String,
        showList: Array,
    </div> -->
  </div>
</template>

<script>
import Directory from "../components/Directory";
import Footer from "../components/Footer";
export default {
  components: {
    Directory,
    Footer,
  },
  data() {
    return {
      hanbinTitle: "汉滨区代表性项目",
      hanbinIntro:
        "汉滨区，陕西省安康市辖区，安康市的政治、经济、文化和交通信息中心。位于陕西省东南部，居汉江上游安康市腹地，东接旬阳市，西连紫阳县、汉阴县，北靠商洛市镇安县.",
      hanbinList: [
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
      xunyangTitle: "旬阳县代表性项目",
      xunyangIntro:
        "旬阳因旬水得名。秦时于旬水入汉水处设旬关，并置旬阳县，西魏改旬阳为洵阳，因“洵”字生僻难认，1964年经国务院批准，复改为旬阳县",
      xunyangList: [
        {
          showImg: require(".././../../mock/img/xunyang1.jpg"),
          title: "旬阳八步景",
          time: "2019-05-09",
          content:
            "旬阳“八步景”有过八种叫法。分别是：“八步景”、”八不就”、“八不救”、“八不紧”、“巴不紧”、“巴不就”、“八摆景”。据现有史料文字记载的就是这八种。现在只有“八步景”一说了。",
        },
        {
          showImg: require(".././../../mock/img/xunyang2.jpg"),
          title: "旬阳民歌",
          time: "2019-07-05",
          content:
            "旬阳民歌是陕西省安康市旬阳县地方民歌之一，历史悠久，曲调丰富，种类繁多，风格迥异，它同其它民间艺术形式一样，是旬阳璀璨的民间艺术瑰宝中一枝绽放的奇葩，也是底蕴深厚的旬阳民间文化遗产不可或缺的重要组成部分。",
        },
        {
          showImg: require(".././../../mock/img/旬阳道戏.jpg"),
          title: "旬阳道情皮影戏",
          time: "2019-3-28",
          content:
            "据1987年10月出版的《旬阳县戏剧志》记载，旬阳县自明末清初就开始演出道情戏，班社众多，艺人辈出。到了清末民国初期，旬阳各地都有道情戏班社常年演出。目前，我县仍有10余个班社活跃在乡镇演出。",
          drawerList: [
            {
              drawerTitle: "旬阳八步景",
              drawerSpecialty:
                "八岔戏角色分为生、旦、丑三门九行当，其中以小生、小旦、小丑戏居多。八岔戏剧目丰富，本戏少，折戏多，题材多为表现男欢女爱和劳动生活中的轶闻趣事。其代表性剧目有《站花墙》、《蔡鸣凤辞店》、《王婆骂鸡》、《蓝桥挑水》、《贾金莲赶船》等。八岔戏的唱腔和音乐伴奏不动丝竹，全凭锣鼓乐“掌其节奏，齐其动作，鼓其精神”。",
              drawerImg: require("../../../mock/img/8chaxi.png"),
              drawerImgTitle: "旬阳八步景",
              drawerImgCon:
                "八岔戏形成于清乾隆、嘉庆年间，随着两湖移民的大量涌入，郧阳调传入安康汉滨，经过艺人们的吸收改造，逐渐形成了具有柏腔体雏形的八岔戏。",
            },
            {
              drawerTitle: "旬阳民歌",
              drawerSpecialty:
                "2014年11月11日，旬阳民歌经国务院批准列入第四批国家级非物质文化遗产名录。旬阳县位于陕西省东南部，北依秦岭，南踞巴山。旬阳民歌历史悠久，现在收集到的流传在县境的传统民歌多是清代末期和民国时期的作品。",
              drawerImg: require("../../../mock/img/xunyangmg2.jpg"),
              drawerImgTitle: "旬阳民歌",
              drawerImgCon:
                "旬阳民歌品种齐全，形式多样，大体分号子、山歌、小调、风俗歌曲四类。",
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
              title: "旬阳八步景图一",
              introP:
                "旬阳八步景是一种传统的民间戏曲表现形式，各种版式齐全，又擅长借用其他剧(曲)中音乐丰富自己，形成了自己独有的特色。",
              imgSrc: require("../../../mock/img/xunyang1.jpg"),
            },
            {
              title: "旬阳八步景图二",
              introP:
                "它适用于多种艺术表演形式，曲调委婉动听、激越悠扬，听之令人荡气回肠，音乐由唱腔、打击乐和唢呐曲牌三部分组成。",
              imgSrc: require("../../../mock/img/xunyangb2.jpg"),
            },
            {
              title: "旬阳民歌图一",
              introP:
                "号子在旬阳民歌中数量虽不多，但它反映劳动生活的实用性和表现性都得到了体现，具体有船工号子、劳动号子等。",
              imgSrc: require("../../../mock/img/xunyang2.jpg"),
            },
            {
              title: "旬阳民歌图二",
              introP:
                "　号子节奏整齐、铿锵有力、曲调简朴、情绪激烈、性格豪迈，多采用一唱众合的演唱形式，其势壮观，其情激越，作为音乐的表现形态，把实用性和表现性有机结合起来。",
              imgSrc: require("../../../mock/img/xunyangmg2.jpg"),
            },
            {
              title: "旬阳民歌图三",
              introP:
                "保护与传承旬阳民歌，对于弘扬民族优秀文化，研究汉水文化和陕西丰富多彩的民间文化，展现地方文化特色，为广大人民群众精神文化生活服务，激发人民群众热爱家乡、热爱生活的豪情，推动地方经济文化发展，具有十分重要的意义和作用",
              imgSrc: require("../../../mock/img/xunyangmg3.jpg"),
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
      ziyangTitle: "紫阳县代表性项目",
      ziyangIntro:
        "夏为古梁州之域。商代属庸国。春秋属巴。战国后期属楚之汉中郡。战国末期，秦灭巴、楚，汉水流域俱归于秦。秦汉之际，紫阳地属益州汉中郡西城县。",
      ziyangList: [
        {
          showImg: require(".././../../mock/img/ziyangz1.jpg"),
          title: "紫阳蒸盆子制作技艺",
          time: "2019-05-09",
          content:
            "紫阳位于陕西省南部。相传因古时刘邦屯兵紫阳境内，适逢春节，刘邦犒劳将士，大家大盆吃肉，大口喝酒，这个“大盆”相传至今就是现在的蒸盆子。",
        },
        {
          showImg: require(".././../../mock/img/ziyangm1.jpg"),
          title: "紫阳毛尖传统手工制作技艺",
          time: "2019-07-05",
          content:
            "紫阳毛尖生长在以紫阳县为中心的汉水中上游大巴山区。紫阳毛尖历史悠久。据《新唐书·地理志》记载，紫阳毛尖原名为“金州茶牙”，列为贡品。清朝时期，紫阳毛尖被列为全国十大名茶之一，每年初春，朝廷就有征茶的信票传入。",
        },
        {
          showImg: require(".././../../mock/img/紫阳民歌.jpeg"),
          title: "茶歌紫阳",
          time: "2006",
          content:
            "紫阳民歌——流传在陕西省安康市紫阳县境内的民间歌曲的总称，是陕南地区民歌中最具代表性的民歌之一。紫阳民歌分为号子、山歌、小调、风俗歌曲、花鼓八岔、孝歌和新民歌等十几个种类",
          drawerList: [
            {
              drawerTitle: "紫阳蒸盆子制作技艺",
              drawerSpecialty:
                "今天的蒸盆子以及吃蒸盆子的种种讲究，是随着岁月的演进而逐步丰富发展起来的。紫阳蒸盆子是一道美食，主要制作原料包括全鸡、猪肘、莲藕、萝卜、鱿鱼、海参、香菇等。",
              drawerImg: require("../../../mock/img/ziyangz2.jpg"),
              drawerImgTitle: "紫阳蒸盆子制作技艺",
              drawerImgCon:
                "制作蒸盆子所用的盆，解放前曾用一种有着三只脚的陶盆，后来被一般的陶盆代替了。除陶盆外，紫阳蒸盆子的制作器具还有容积在5公斤左右的大乌盆一套、大案板、大锅一口、土灶等。",
            },
            {
              drawerTitle: "紫阳毛尖传统手工制作技艺",
              drawerSpecialty:
                "紫阳毛尖制作工艺精细。首先是采摘鲜叶。每到春分后，紫阳茶农提篮背篓，上山采茶。采摘后用竹篮或背篓装鲜叶，透风、保鲜，不损伤嫩叶。其次是摊晾。采回的鲜叶要立即摊晾。",
              drawerImg: require("../../../mock/img/ziyangm2.jpg"),
              drawerImgTitle: "紫阳毛尖传统手工制作技艺",
              drawerImgCon:
                "第三步是杀青。待鲜叶水分散失后，即用“尺八锅”或毛边锅在砌成的“平锅灶”或“陡锅灶”上杀青;用紫草做燃料，待锅温升至160—180℃时投入鲜叶1.5—2.5公斤，然后用双手在锅中翻、捞。",
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
              title: "紫阳蒸盆子制作技艺图一",
              introP:
                "紫阳蒸盆子的主要程序是先将准备齐全的材料一次入盆，将盐及料酒浸过的猪肘放在盆底，再将全鸡立于猪肘之上，然后放入莲藕、水萝卜、木耳、墨鱼、海参等。",
              imgSrc: require("../../../mock/img/ziyangz6.jpg"),
            },
            {
              title: "紫阳蒸盆子制作技艺图二",
              introP:
                "海参须蒸过后才放入，最后即将起锅时再放入鸡蛋饺。盆里的花椒等香料须用纱布包裹，它们只入味，不见料渣。",
              imgSrc: require("../../../mock/img/ziyangz1.jpg"),
            },
            {
              title: "紫阳蒸盆子制作技艺图三",
              introP:
                "紫阳蒸盆子有着实用价值、营养价值和审美价值。紫阳蒸盆子的主要用料全部为当地土产",
              imgSrc: require("../../../mock/img/ziyangz5.jpg"),
            },
            {
              title: "紫阳蒸盆子制作技艺图四",
              introP:
                "在蒸煮时必须用竹子做柴火，蒸煮时间必须在8小时以上。紫阳蒸盆子用料讲究，做工精细，",
              imgSrc: require("../../../mock/img/ziyangz4.jpg"),
            },
            {
              title: "紫阳蒸盆子制作技艺图五",
              introP:
                "程序复杂，口感鲜、香，营养丰富，久吃不腻。紫阳蒸盆子制作技艺已列入陕西省第二批非物质文化遗产名录。",
              imgSrc: require("../../../mock/img/ziyangz3.jpg"),
            },
            {
              title: "紫阳蒸盆子制作技艺图六",
              introP:
                "紫阳位于陕西省南部。相传因古时刘邦屯兵紫阳境内，适逢春节，刘邦犒劳将士，大家大盆吃肉，大口喝酒，这个“大盆”相传至今就是现在的蒸盆子。",
              imgSrc: require("../../../mock/img/ziyangz2.jpg"),
            },
            {
              title: "紫阳毛尖传统手工制作技艺图一",
              introP:
                "锅温继续升高后，再用木杈连续翻、捞、抖，炒至深绿色，发出清香时立即出锅，在簸箕中簸动茶叶，降温剔杂。",
              imgSrc: require("../../../mock/img/ziyangm1.jpg"),
            },
            {
              title: "紫阳毛尖传统手工制作技艺图二",
              introP:
                "第四步是初揉。即先将石板清洗干净，将杀青后晾凉的茶叶放在石板上，双手抱团似地旋转揉捻。第五步是晒干。即将初揉后的茶叶放在石板房顶或石板院坝里，让阳光直晒，使茶叶色泽呈现黄绿色或米黄色。",
              imgSrc: require("../../../mock/img/ziyangm2.jpg"),
            },
            {
              title: "紫阳毛尖传统手工制作技艺图三",
              introP:
                "第六步是渥堆发汗。渥堆发汗是紫阳毛尖制作过程中最为独特的环节，将晾晒茶叶堆积起来，盖上竹席或土布约30—40分钟，使叶质再度变软，滋味更加醇和。第七步是紧条提毫。",
              imgSrc: require("../../../mock/img/ziyangm3.jpg"),
            },
            {
              title: "紫阳毛尖传统手工制作技艺图四",
              introP:
                "第七步是紧条提毫。渥堆发汗后，将半干的茶坯握在两掌中以不同方向旋转搓揉，使叶子间翻卷成条，白毫显露出来，这是毛尖造型的关键工序。第八步是晾干。",
              imgSrc: require("../../../mock/img/ziyangm4.jpg"),
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
      ],
      zhenpingTitle: "镇坪县代表性项目",
      zhenpingIntro:
        "公元前11世纪，今镇坪地区为庸人拥有。周武王灭商，建庸国，镇坪为庸国辖地鲁文公十七年（前610），楚庄王联合秦巴灭庸，庸地属楚",
      zhenpingList: [
        {
          showImg: require(".././../../mock/img/zpgy1.jpg"),
          title: "古盐道上的文化遗存",
          time: "2019-05-09",
          content:
            "满眼滴翠，耳闻鸟鸣，踏溪涉水，重走镇坪古盐道，感受古盐运文化,近日，镇坪县以：盐道.发现--重走镇坪古盐道为主题的采风活动顺利举行。",
        },
        {
          showImg: require(".././../../mock/img/zph1.png"),
          title: "薅草锣鼓",
          time: "2019-07-05",
          content:
            "薅草锣鼓又称薅草号子，俗称“打闹歌”。是一种独特的民族民歌艺术形式。是土家人在薅草季节，聚集数十乃至数百人在进行集体劳动时，请两名歌手一个击鼓，是国家级非物质文化遗产《酉阳古歌》的重要组成部分。”，列为贡品。清朝时期，紫阳毛尖被列为全国十大名茶之一，每年初春，朝廷就有征茶的信票传入。",
        },
        {
          showImg: require(".././../../mock/img/zpjx1.jpg"),
          title: "鸡心岭传说",
          time: "2006",
          content:
            "在陕、渝、鄂接壤处，有一高岭，相传岭下有一山洞，从洞中不停的向外喷洒盐水。一日，木匠祖师鲁班与太上老君路过此岭，发现了这股盐水白白浪费掉了，于是二位打赌，声言一夜间要将盐水引至人口稠密的巫溪、巫山一带。造福百姓，先者为师，后者为徒，观音菩萨可以作证",
          drawerList: [
            {
              drawerTitle: "古盐道上的文化遗存",
              drawerSpecialty:
                "来自该县文联、作家协会、诗词楹联协会共28人参加了此次采风活动。采风的两天里从镇坪出发，沿途观看了最早的盐道遗迹，探秘盐泉始发地，走进古老的盐场陕西一条街，亲身体验了从大宁盐厂起源地到巫溪溶洞这条古老的盐道，踏上了三省交界地的“自然国心”，加深了对盐道文化的了解，并结合采风活动抒创作出盐道文化精品",
              drawerImg: require("../../../mock/img/zpgy2.jpg"),
              drawerImgTitle: "古盐道上的文化遗存",
              drawerImgCon:
                "据悉，镇坪古盐道作为第三次全国文物普查新发现的27个古遗址之一入围全国百大新发现，被国家文物局录入《第三次全国文物普查百大新发现》一书。",
            },
            {
              drawerTitle: "薅草锣鼓",
              drawerSpecialty:
                "薅草锣鼓它由田间生产、薅草劳动、山歌艺术等表现形式组成。主要以二人敲锣打鼓给薅草人提劲，以此提高劳动效率而世代相传的、表现劳动生产与音乐相结合的独有山歌歌种。演唱时用高亢的唱腔",
              drawerImg: require("../../../mock/img/zph5.png"),
              drawerImgTitle: "薅草锣鼓",
              drawerImgCon:
                "薅草锣鼓，渝黔一带土家人俗称“打闹”、“打闹歌”，鄂西州一带也有叫“山锣鼓”的，它由薅草劳动形式和田歌艺术形式两部分组成，是土家族的一种伴随劳动生产与音乐相结合的民间艺术形式。",
            },
            {
              drawerTitle: "鸡心岭传说",
              drawerSpecialty:
                "天黑，二位同时动工，鲁班念动咒语，运发神力，挥舞王尺，一路逢岩打眼竖杆，遇沟凌空架起渡槽，半夜即至重庆云阳县云安镇了，老君因久在天庭炼丹，对工程不熟，到子时才将盐水引至巫溪县宁场镇。",
              drawerImg: require("../../../mock/img/zpjx1.jpg"),
              drawerImgTitle: "鸡心岭传说",
              drawerImgCon:
                "胜负已见分晓，观音担心二人会因此而伤和气。忙驾祥云飞至三省交界的这座山岭上，化作雄鸡高啼三遍九声，鲁班、老君以为天亮了，同时收工。",
            },
          ],
          pictShowList: [
            {
              title: "古盐道上的文化遗存图一",
              introP:
                "此古盐道起源距镇坪县南约45公里的重庆巫溪县大宁河，河北岸峭壁处有一天生洞穴，一股盐泉自穴中喷涌而出，先民便用此泉水埋锅煎盐，并销往邻界各地，后产量骤增，盐厂收为官办，名为大宁盐。",
              imgSrc: require("../../../mock/img/zpgy1.jpg"),
            },
            {
              title: "古盐道上的文化遗存图二",
              introP:
                "因镇坪是陕西、湖北通向大宁盐厂的唯一旱路，由此，盐道分为三线：一条向东进入湖北竹山、竹溪、房县三县；一条向西经岚皋县出境达紫阳，入汉中镇巴县；。",
              imgSrc: require("../../../mock/img/zpgy2.jpg"),
            },
            {
              title: "古盐道上的文化遗存图三",
              introP:
                "最远、最重要的一条一路向北纵贯镇坪全境，直达金州（今安康）。此古盐道不仅是安康、汉中、商洛及湖北部分县市数千万人民的生命线，也是一条贯通川陕和鄂北地区的经济大动脉",
              imgSrc: require("../../../mock/img/zpgy3.jpg"),
            },
            {
              title: "古盐道上的文化遗存图四",
              introP:
                "在历史的长河中为这一地区留下了宝贵的文化遗产和精神财富。",
              imgSrc: require("../../../mock/img/zpgy4.jpg"),
            },
            {
              title: "古盐道上的文化遗存图五",
              introP:
                "该县文化馆馆长邹卫鹏表示此次盐道采风的目的旨在更多的发现秦、巴、楚、庸以及巫咸古国的多种文化元素，挖掘盐道这条生命之道，历史之道，文化之道的精髓。",
              imgSrc: require("../../../mock/img/zpgy5.jpg"),
            },
            {
              title: "薅草锣鼓图一",
              introP:
                "在结群薅草、挖土、栽秧时，一般有两位歌师傅领唱或对唱山歌，一人按节奏击鼓，一人应点敲锣，锣鼓间歇，歌声即起",
              imgSrc: require("../../../mock/img/zph1.png"),
            },
            {
              title: "薅草锣鼓图二",
              introP:
                "轮流对唱，整日不歇。历史上，土家族地区山大人稀，单家独户劳力不足，加上野兽出没，窃食庄稼，伤害人畜。",
              imgSrc: require("../../../mock/img/zph2.png"),
            },
            {
              title: "薅草锣鼓图三",
              introP:
                "在这种特定的自然条件和劳动环境中，土家族人形成了团结互助、结伴成群、协作生产，并配以锣鼓敲击",
              imgSrc: require("../../../mock/img/zph3.png"),
            },
            {
              title: "薅草锣鼓图四",
              introP:
                "唱歌不畏难，也不是挑花绣牡丹，绣花要用针和线，唱歌只要舌头卷，陪我歌师傅唱几天。又如：姐儿住在对门岩，看着看着长起来，早上看到姐挑水，晚上看到姐抱柴，恨不得一翅飞拢来。",
              imgSrc: require("../../../mock/img/zph4.png"),
            },
            {
              title: "鸡心岭传说图一",
              introP:
                "此后，这座山岭得名金鸡岭，再后来，人们观其形状似鸡心，易名鸡心岭。至今重庆云安和巫溪两处的小盐场，出产幼稚井盐，据说就是引致鸡心岭上的盐水。",
              imgSrc: require("../../../mock/img/zpjx1.jpg"),
            },
          ],
        },
      ],
      pinliTitle: "平利县代表性项目",
      pinliIntro:
        "平利县，隶属于陕西省安康市，介于北纬31°37′—32°39分、东经109°—109°33′之间，东邻湖北竹溪县，南接重庆市城口县， 西连陕西省安康市岚皋县，北靠陕西省安康市",
      pinliList: [
        {
          showImg: require(".././../../mock/img/平利玄子.jpeg"),
          title: "平利弦子腔",
          time: "2008",
          content:
            "平利弦子腔——弦子戏，又名弦子腔，属高腔体系。因主要是以弦胡伴奏，唱腔中又是用喊腔吆号子，故名弦子腔，其表演形式是皮影戏。",
        },
        {
          showImg: require(".././../../mock/img/pln2.jpg"),
          title: "平利女娲的传说",
          time: "2008",
          content:
            "平利女娲山位于安康市平利县西北部，海拔988米，面积60余平方公里。经考古发现，女娲山周围有新石器时代古遗址三处，在这些古遗址上相继出土了数百件磨制石器，说明早在六、七千年前女娲山及其周围一带即有人类活动。",
        },
        {
          showImg: require(".././../../mock/img/plmj1.jpg"),
          title: "平利民间书画",
          time: "2006",
          content:
            "平利山清水秀，地灵人杰。优越的生态环境和美丽的自然风光，抚育了祖祖辈辈平利人。在这片神奇的土地上，人文荟萃，层出不穷。一代又一代艺术家们，运用自身的神韵之笔，为可爱的家乡留下了一幅幅水墨丹青",
          drawerList: [
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
              drawerTitle: "平利女娲的传说",
              drawerSpecialty:
                "2004年7月，新出土了中皇山女娲氏墓碑。经考证，系清代中叶陕西省盐法道官员奉旨为女娲修墓而立。在当地女娲山一带，长期流传着女娲的相关传说。平利一带流传的女娲传说，主要有女娲造人和女娲补天两部分。",
              drawerImg: require("../../../mock/img/pln2.jpg"),
              drawerImgTitle: "平利女娲的传说",
              drawerImgCon:
                "女娲造人的传说主要内容如下：女娲在造人之前，与正月初一创造出鸡，初二创造狗，初三创造羊，初四创造猪，初六创造马，初七这一天，女娲用黄土和水，仿照自己的样子造出了一个个小泥人",
            },
            {
              drawerTitle: "平利民间书画",
              drawerSpecialty:
                "平利民间书画自清代后盛行，主要应用于庄园彩绘、庙堂神像彩绘、斋祭和节庆活动等。到近代，平利更是出现很多书画能人，作品题材广泛，涉及种类众多。",
              drawerImg: require("../../../mock/img/plmj2.jpg"),
              drawerImgTitle: "平利民间书画",
              drawerImgCon:
                "平利书法家以晚清时代鄢明邑（字霭堂，八仙正阳张家坝人）和李联芳（字实斋平利洛河人）等为主要代表，传留下来较多书法优秀代表作，平利县文物管理所内均有珍藏。",
            },
          ],
          pictShowList: [
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
              title: "平利女娲的传说图一",
              introP:
                "她造了一批又一批，觉得太慢，于是用一根藤条，沾满泥浆，挥舞起来，一点一点的泥浆洒在地上，都变成了人。",
              imgSrc: require("../../../mock/img/pln3.jpg"),
            },
            {
              title: "平利女娲的传说图二",
              introP:
                "为了让人类永远的流传下去，她创造了嫁娶之礼，自己充当媒人，让人们懂得「造人」的方法，凭自己的力量传宗接代。另一种传说《独异志》是：女娲是与伏羲为兄妹。",
              imgSrc: require("../../../mock/img/pln2.jpg"),
            },
            {
              title: "平利女娲的传说图三",
              introP:
                "相议想为夫妻，又自觉羞耻。兄即与妹上昆仑山，咒曰：「天若同意我兄妹二人为夫妻，请您将天上的云都合起来一团，要不就把云散了吧。」以是天上的云立即合起来，他们俩就成了夫妻，中华民族都是他们俩的子孙后代",
              imgSrc: require("../../../mock/img/pln1.jpg"),
            },
            {
              title: "平利民间书画图一",
              introP:
                "画家尤以甘棠（名大霖，号醉霞，平利洛河安坝人）成就最大，一度在西安和北京等地颇负盛名。",
              imgSrc: require("../../../mock/img/plmj1.jpg"),
            },
            {
              title: "平利民间书画图二",
              introP:
                "现存于世的一部分优秀作品珍藏于安康市博物馆及平利文物管理所。这些作品不仅有珍贵的文物价值，而且具有很高的文化艺术研究价值。",
              imgSrc: require("../../../mock/img/plmj2.jpg"),
            },
            {
              title: "平利民间书画图三",
              introP:
                "鄢霭堂行书四条屏。国家三级文物，清代，行书四屏，有题有款，笔力劲秀，挥洒自如。通长130cm，单幅画心102x30cm。）",
              imgSrc: require("../../../mock/img/plmj3.jpg"),
            },
            {
              title: "平利民间书画图四",
              introP:
                "（甘棠照片。国家三级文物，清代，甘棠晚照，坐姿，着长袍马褂，右手拄龙头拐杖，左手执书卷。通长16cm，画心15.5x11cm。）",
              imgSrc: require("../../../mock/img/plmj4.jpg"),
            },
          ],
        },
      ],
      langaoTitle: "岚皋县代表性项目",
      langaoIntro: "安康火龙有300年历史，是汉滨区先民薪火相传的一种民间艺术",
      baiheTitle: "白河县代表性项目",
      baiheIntro: "安康火龙有300年历史，是汉滨区先民薪火相传的一种民间艺术",
      hanyinTitle: "汉阴县代表性项目",
      hanyinIntro: "安康火龙有300年历史，是汉滨区先民薪火相传的一种民间艺术",
      shiquanTitle: "石泉县代表性项目",
      shiquanIntro: "安康火龙有300年历史，是汉滨区先民薪火相传的一种民间艺术",
      ninshanTitle: "宁陕县代表性项目",
      ninshanIntro: "安康火龙有300年历史，是汉滨区先民薪火相传的一种民间艺术",

      imgList: [
        {
          id: 1,
          imgUrl: require("../assets/img/lunboImg1.jpg"),
        },
        {
          id: 2,
          imgUrl: require("../assets/img/lunboImg2.jpg"),
        },
        {
          id: 3,
          imgUrl: require("../assets/img/lunboImg3.jpg"),
        },
        {
          id: 4,
          imgUrl: require("../assets/img/lunboImg4.jpg"),
        },
      ],
    };
  },
  beforeRouteLeave(to, feom, next) {
    this.$parent.closeNav();
    next();
  },
};
</script>
<style lang="less" scoped>
#appreciate {
  width: 100%;
  height: 100vh;
  font-size: 0.9em;
  .appreciate-wrapper {
    width: 100%;
    height: 100vh;
    // background: #ccc;
    background: url("../assets/img/mapbg.jpg") no-repeat;
    background-size: 100% 80%;
    background-position: top;
    min-width: 1400px;
    min-height: 800px;
    .appreciate-header {
      h4 {
        font-size: 2em;
        width: 12em;
        color: #ffff;
        position: relative;
        left: calc(50% - 9em);
        letter-spacing: 15px;
        text-align: center;
        padding: 100px;
        &::before {
          content: "";
          display: block;
          width: 0.8em;
          height: 1.5em;
          background: url("../assets/img/rawBiao.png") no-repeat;
          position: absolute;
          top: 44%;
          left: 15%;
        }
        &::after {
          content: "";
          display: block;
          width: 0.8em;
          height: 1.5em;
          background: url("../assets/img/rawBiao.png") no-repeat;
          position: absolute;
          left: 77%;
          top: 40%;
          transform: rotate(180deg);
          // background-size: cover;
        }
      }
    }
    .block {
      width: 100%;
      height: 50%;
      position: relative;

      // left: 10%;
      padding: 70px 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>

<style scoped>
el-carousel__container {
  position: absolute;
  top: 50%;
  height: 300px;
}
</style>
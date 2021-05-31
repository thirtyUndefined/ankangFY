<template>
  <div id="knowledge">
    <div class="knowledge-header">
      <div class="konwledge-header-content">
        <h4>知识窗</h4>
        <p ref="prompt"></p>
        <img src="../assets/img/arrow_down.png" alt="" />
      </div>
    </div>
    <div class="knowledge-main">
      <div class="show-btn">
        <div class="el-button" ref="kBtn" plain @click="showKnowledge">
          专业知识
        </div>
        <div class="el-button btn2" ref="wBtn" plain @click="showWork">
          工作指南
        </div>
      </div>
      <el-collapse accordion class="el-collapse" v-show="isShowKnowledge">
        <el-collapse-item class="el-collapse-item">
          <template slot="title">
            1.什么是非物质文化遗产<i class="header-icon el-icon-info"></i>
          </template>
          <div>
            《中华人民共和国非物质文化遗产法》所称非物质文化遗产，是指各族人民世代相传并视为其文化遗产组成部分的各种传统文化表现形式，以及与传统文化表现形式相关的实物和场所。包括：
          </div>
          <div>一、传统口头文学以及作为其载体的语言；</div>
          <div>二、传统美术、书法、音乐、舞蹈、戏剧、曲艺和杂技；</div>
          <div>三、传统技艺、医药和历法；</div>
          <div>四、传统礼仪、节庆等民俗；</div>
          <div>五、传统体育和游艺；</div>
          <div>六、其他非物质文化遗产。</div>
          <div>
            属于非物质文化遗产组成部分的实物和场所，凡属文物的，适用《中华人民共和国文物保护法》的有关规定。
          </div>
          <div>
            来源：《中华人民共和国非物质文化遗产法》(中华人民共和国主席令第四十二号)
          </div>
          <div>
            联合国教科文组织《保护非物质文化遗产公约》中所称非物质文化遗产，指被各社区、群体，有时是个人，视为其文化遗产组成部分的各种社会实践、观念表述、表现形式、知识、技能以及相关的工具、实物、手工艺品和文化场所。这种非物质文化遗产世代相传，在各社区和群体适应周围环境以及与自然和历史的互动中，被不断地再创造，为这些社区和群体提供认同感和持续感，从而增强对文化多样性和人类创造力的尊重。在《保护非物质文化遗产公约》中，只考虑符合现有的国际人权文件，各社区、群体和个人之间相互尊重的需要和顺应可持续发展的非物质文化遗产，包括以下方面：
          </div>
          <div>一、口头传统和表现形式，包括作为非物质文化遗产媒介的语言；</div>
          <div>二、表演艺术</div>
          <div>三、社会实践、仪式、节庆活动；</div>
          <div>四、有关自然界和宇宙的知识和实践；</div>
          <div>五、传统手工艺。</div>
          <div>来源：《保护非物质文化遗产公约》</div>
        </el-collapse-item>
        <el-collapse-item
          title="2.《保护非物质文化遗产公约》中对于“保护”的九项措施指什么"
        >
          <div>
            “保护”指确保非物质文化遗产生命力的各种措施，包括这种遗产各个方面的确认、立档、研究、保存、保护、宣传、弘扬、传承（特别是通过正规和非正规教育）和振兴。
            来源：《保护非物质文化遗产公约》
          </div>
        </el-collapse-item>
        <el-collapse-item title="3.非物质文化遗产的保护主体是什么">
          <div>
            非物质文化遗产的保护主体，指负有保护责任、从事保护工作的国际组织、各国政府相关机构、团体和社会有关部门及个人。它包括国际组织、国家政府、各级各类非物质文化遗产保护机构、社区与民众。
          </div>
          <div>
            来源：王文章.非物质文化遗产概论（修订版）.北京：教育科学出版社,2013.
          </div>
          <div>
            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          </div>
        </el-collapse-item>
        <el-collapse-item title="4.非物质文化遗产的传承主体是什么">
          <div>
            非物质文化遗产的传承主体，是指某一项非物质文化遗产的优秀传承人或传承群体，即代表某项遗产深厚的民族民间文化传统，掌握着某项非物质文化遗产的知识、技艺、技术，并且具有最高水准，具有公认的代表性、权威性与影响力的个人或群体。
          </div>
          <div>
            来源：王文章.非物质文化遗产概论（修订版）.北京：教育科学出版社,2013.
          </div>
        </el-collapse-item>
        <el-collapse-item title="5.我国非物质文化遗产保护工作的指导方针是什么">
          <div>
            保护为主、抢救第一、合理利用、传承发展。正确处理保护和利用的关系，坚持非物质文化遗产保护的真实性和整体性，有效保护的前提下合理利用，防止对非物质文化遗产的误解、歪曲或滥用。在科学认定的基础上，采取有力措施，使非物质文化遗产在全社会得到确认、尊重和弘扬。
          </div>
          <div>
            来源：《国务院办公厅关于加强我国非物质文化遗产保护工作的意见》（国办发〔2005〕18号）
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="6.我国非物质文化遗产保护工作原则是什么
"
        >
          <div>
            政府主导、社会参与，明确职责、形成合力;长远规划、分步实施，点面结合、讲求实效。
          </div>
          <div>
            来源：《国务院办公厅关于加强我国非物质文化遗产保护工作的意见》（国办发〔2005〕18号
          </div>
        </el-collapse-item>
        <el-collapse-item title="7.什么是国家级文化生态保护区">
          <div>
            国家级文化生态保护区是指以保护非物质文化遗产为核心，对历史文化积淀丰厚、存续状态良好，具有重要价值和鲜明特色的文化形态进行整体性保护，并经文化和旅游部同意设立的特定区域。
          </div>
          <div>
            来源：国家级文化生态保护区管理办法（中华人民共和国文化和旅游部令第1号）
          </div>
        </el-collapse-item>
        <el-collapse-item title="8.什么是非物质文化遗产生产性保护">
          <div>
            非物质文化遗产生产性保护是指在具有生产性质的实践过程中，以保持非物质文化遗产的真实性、整体性和传承性为核心，以有效传承非物质文化遗产技艺为前提，借助生产、流通、销售等手段，将非物质文化遗产及其资源转化为文化产品的保护方式。目前，这一保护方式主要是在传统技艺、传统美术和传统医药药物炮制类非物质文化遗产领域实施。
          </div>
          <div>
            来源：《文化部关于加强非物质文化遗产生产性保护的指导意见》（文非遗发〔2012〕4号）
          </div>
        </el-collapse-item>
        <el-collapse-item title="9.国家级非物质文化遗产代表性项目名录的分类">
          <div>
            2006年5月，国务院公布了第一批国家级非物质文化遗产名录，分为民间文学、民间音乐、民间舞蹈、传统戏剧、曲艺、杂技与竞技、民间美术、传统手工技艺、传统医药、民俗十大门类。
          </div>
          <div>
            2008年6月，国务院公布了第二批国家级非物质文化遗产名录和第一批国家级非物质文化遗产扩展项目名录，将十大门类调整为：民间文学，传统音乐，传统舞蹈，传统戏剧，曲艺，传统体育、游艺与杂技，传统美术，传统技艺，传统医药和民俗。此后国务院公布的第三批国家级非物质文化遗产名录和第四批国家级非物质文化遗产代表性项目名录沿用了调整后的类别名称
          </div>
          <div>
            来源：《国务院关于公布第一批国家级非物质文化遗产名录的通知》（国发〔2006〕18号）、《国务院关于公布第二批国家级非物质文化遗产名录和第一批国家级非物质文化遗产扩展项目名录的通知》（国发〔2008〕19号）
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="10.“国家级非物质文化遗产名录”何时调整为“国家级非物质文化遗产代表性项目名录”"
        >
          <div>
            2014年11月，国务院印发《国务院关于公布第四批国家级非物质文化遗产代表性项目名录的通知》，该文件指出，按照《中华人民共和国非物质文化遗产法》的表述，将“国家级非物质文化遗产名录”名称调整为“国家级非物质文化遗产代表性项目名录”。由此，在工作实践中，“国家级非物质文化遗产项目代表性传承人”也相应调整为“国家级非物质文化遗产代表性项目代表性传承人”。
          </div>
          <div>
            来源：《国务院关于公布第四批国家级非物质文化遗产代表性项目名录的通知》（国发〔2014〕59号）
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-collapse accordion class="el-collapse" v-show="isShowWork">
        <el-collapse-item class="el-collapse-item">
          <template slot="title">
            1.国家级非物质文化遗产项目保护单位职责<i
              class="header-icon el-icon-info"
            ></i>
          </template>
          <div>
            《国家级非物质文化遗产保护与管理暂行办法》规定，国家级非物质文化遗产项目保护单位应当履行以下职责：
          </div>
          <div>一、全面收集该项目的实物、资料，并登记、整理、建档；</div>
          <div>二、为该项目的传承及相关活动提供必要条件；</div>
          <div>三、有效保护该项目相关的文化场所；</div>
          <div>四、积极开展该项目的展示活动；</div>
          <div>
            五、向负责该项目具体保护工作的当地人民政府文化行政部门报告项目保护实施情况，并接受监督。
          </div>
          <div>
            来源：《国家级非物质文化遗产保护与管理暂行办法》（中华人民共和国文化部令第39号）
          </div>
        </el-collapse-item>
        <el-collapse-item title="2.非物质文化遗产代表性项目代表性传承人权利">
          <div>
            《中华人民共和国非物质文化遗产法》规定，县级以上人民政府文化主管部门根据需要，采取下列措施，支持非物质文化遗产代表性项目的代表性传承人开展传承、传播活动：
          </div>
          <div>一、提供必要的传承场所；</div>
          <div>二、提供必要的经费资助其开展授徒、传艺、交流等活动；</div>
          <div>三、支持其参与社会公益性活动；</div>
          <div>四、支持其开展传承、传播活动的其他措施。</div>
          <div>
            《国家级非物质文化遗产项目代表性传承人认定与管理暂行办法》规定，各级文化行政部门应对开展传习活动确有困难的国家级非物质文化遗产项目代表性传承人予以支持，支持方式主要有：
          </div>
          <div>一、资助传承人的授徒传艺或教育培训活动；</div>
          <div>二、提供必要的传习活动场所；</div>
          <div>三、资助有关技艺资料的整理、出版；</div>
          <div>四、提供展示、宣传及其他有利于项目传承的帮助。</div>
          <div>
            对无经济收入来源、生活确有困难的国家级非物质文化遗产项目代表性传承人，所在地文化行政部门应积极创造条件，并鼓励社会组织和个人进行资助，保障其基本生活需求。
          </div>
          <div>
            来源：《中华人民共和国非物质文化遗产法》(中华人民共和国主席令第四十二号)、《国家级非物质文化遗产项目代表性传承人认定与管理暂行办法》(中华人民共和国文化部令第45号)
          </div>
        </el-collapse-item>
        <el-collapse-item title="3.非物质文化遗产代表性项目代表性传承人义务">
          <div>
            《中华人民共和国非物质文化遗产法》规定，非物质文化遗产代表性项目的代表性传承人应当履行下列义务：
          </div>
          <div>一、开展传承活动，培养后继人才；</div>
          <div>二、妥善保存相关的实物、资料；</div>
          <div>三、配合文化主管部门和其他有关部门进行非物质文化遗产调查；</div>
          <div>四、参与非物质文化遗产公益性宣传。</div>
          <div>
            非物质文化遗产代表性项目的代表性传承人无正当理由不履行前款规定义务的，文化主管部门可以取消其代表性传承人资格，重新认定该项目的代表性传承人；丧失传承能力的，文化主管部门可以重新认定该项目的代表性传承人。
          </div>
          <div>
            《国家级非物质文化遗产项目代表性传承人认定与管理暂行办法》规定，国家级非物质文化遗产项目代表性传承人应承担以下义务：
          </div>
          <div>
            一、在不违反国家有关法律法规的前提下，根据文化行政部门的要求，提供完整的项目操作程序、技术规范、原材料要求、技艺要领等；
          </div>
          <div>二、制定项目传承计划和具体目标任务，报文化行政部门备案；</div>
          <div>
            三、采取收徒、办学等方式，开展传承工作，无保留地传授技艺，培养后继人才；
          </div>
          <div>四、积极参与展览、演示、研讨、交流等活动；</div>
          <div>五、定期向所在地文化行政部门提交项目传承情况报告。</div>
          <div>
            来源：《中华人民共和国非物质文化遗产法》(中华人民共和国主席令第四十二号)、《国家级非物质文化遗产项目代表性传承人认定与管理暂行办法》(中华人民共和国文化部令第45号)
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="4.政府如何对非物质文化遗产代表性项目代表性传承人进行管理"
        >
          <div>
            《国家级非物质文化遗产项目代表性传承人认定与管理暂行办法》规定，政府通过报送代表性传承人情况、建立代表性传承人档案、表彰和奖励有突出贡献的代表性传承人等方式对非物质文化遗产代表性传承人进行管理。同时，依法建立代表性传承人的退出和重新认定机制，对非物质文化遗产代表性传承人进行管理。
          </div>
          <div>
            《中华人民共和国非物质文化遗产法》和《国家级非物质文化遗产项目代表性传承人认定与管理暂行办法》规定，非物质文化遗产代表性项目的代表性传承人无正当理由不履行前款规定义务的，文化主管部门可以取消其代表性传承人资格，重新认定该项目的代表性传承人；丧失传承能力的，文化主管部门可以重新认定该项目的代表性传承人。
          </div>
          <div>
            来源：《中华人民共和国非物质文化遗产法》（中华人民共和国主席令第四十二号）、《国家级非物质文化遗产项目代表性传承人认定与管理暂行办法》（中华人民共和国文化部令第45号）
          </div>
        </el-collapse-item>
        <el-collapse-item title="5.国家级文化生态保护区的建设目标">
          <div>
            国家级文化生态保护区建设应坚持保护优先、整体保护、见人见物见生活的理念，既保护非物质文化遗产，也保护孕育发展非物质文化遗产的人文环境和自然环境，实现“遗产丰富、氛围浓厚、特色鲜明、民众受益”的目标。
          </div>
          <div>
            来源：国家级文化生态保护区管理办法（中华人民共和国文化和旅游部令第1号）
          </div>
        </el-collapse-item>
        <el-collapse-item
          title="6.国家级文化生态保护区建设管理机构承担的主要职责
"
        >
          <div>
            一、贯彻落实国家有关文化建设、非物质文化遗产保护的法律、法规和方针、政策；
          </div>
          <div>
            二、制定实施国家级文化生态保护区的各项建设管理制度，创新工作机制和保护方式、措施；
          </div>
          <div>三、负责实施国家级文化生态保护区总体规划；</div>
          <div>四、组织或委托有关机构开展文化生态保护理论和实践研究；</div>
          <div>五、开展文化生态保护的宣传教育和培训；</div>
          <div>六、评估、报告和公布国家级文化生态保护区建设情况和成效。</div>
          <div>
            来源：国家级文化生态保护区管理办法（中华人民共和国文化和旅游部令第1号）
          </div>
        </el-collapse-item>
        <el-collapse-item title="7.国家级非物质文化遗产生产性保护示范基地推荐条件">
          <div>
            国家级文化生态保护区是指以保护非物质文化遗产为核心，对历史文化积淀丰厚、存续状态良好，具有重要价值和鲜明特色的文化形态进行整体性保护，并经文化和旅游部同意设立的特定区域。
          </div>
          <div>
           一、拥有至少一项国家级非物质文化遗产名录项目；
          </div>
          <div>二、在生产性保护活动中坚持非物质文化遗产的本真性、完整性及核心技艺的保护与传承；</div>
          <div>三、积极开展非物质文化遗产的抢救与保护，注重整理、保存相关资料，全面拍摄记录技艺流程，实施有利于传承发展的有效方法；</div>
          <div>四、非物质文化遗产的传承有序、富有成效，涌现出一批后继人才；</div>
          <div>五、积极开展非物质文化遗产的展示、展演和出版、宣传、教育活动，充分发挥对青少年的教育及教学作用，在本省(区、市)及周边地区享有较高的社会声誉；</div>
          <div>六、通过非物质文化遗产生产性保护，取得了显著的社会效益和经济效益，提高了传承人的地位和收入，扩大了就业岗位，并为促进当地经济社会全面协调可持续发展做出较大贡献</div>
          <div>来源：《文化部办公厅关于开展国家级非物质文化遗产生产性保护示范基地建设的通知》（办非遗函〔2010〕499号）</div>
        </el-collapse-item>
        <el-collapse-item title="8.国家级非物质文化遗产生产性保护示范基地推荐评选程序">
          <div>
            《文化部办公厅关于开展国家级非物质文化遗产生产性保护示范基地建设的通知》要求，国家级非遗生产性保护示范基地推荐评选程序包括：
          </div>
          <div>
            一、各省（区、市）文化厅（局）对生产性保护具有典型意义和示范价值的企业或单位进行初步考察论证之后，可向文化部推荐；中央直属单位、企业可直接向文化部提出申请。
          </div>
          <div>二、文化部对推荐材料进行审核后，组织专家对各省（区、市）及中央直属单位、企业推荐的“国家级非物质文化遗产生产性保护示范基地”进行实地考察，并结合推荐材料进行评审论证，出具考察论证意见。</div>
          <div>三、文化部对“国家级非物质文化遗产生产性保护示范基地”名单进行公示，公示期为15天。</div>
          <div>四、公示期满无异议的，文化部进行研究认定，对具备条件的单位和企业命名为“国家级非物质文化遗产生产性保护示范基地”，并颁发标牌和证书。</div>
          <div>来源：《文化部办公厅关于开展国家级非物质文化遗产生产性保护示范基地建设的通知》（办非遗函〔2010〕499号）</div>
        </el-collapse-item>
        <el-collapse-item title="9.国家级非物质文化遗产生产性保护示范基地推荐材料">
          <div>
           《文化部办公厅关于开展国家级非物质文化遗产生产性保护示范基地建设的通知》要求，国家级非遗生产性保护示范基地推荐材料包括：
          </div>
          <div>
           一、申请书：各省（区、市）文化厅（局）及中央直属单位、企业关于推荐“国家级非物质文化遗产生产性保护示范基地”的请示。
          </div>
          <div>
           二、推荐表：内容应包括该单位、企业的基本情况、相关国家级非物质文化遗产名录项目概述，传承情况，生产性保护中坚持非遗本真性、完整性及核心技艺的保护与传承情况、产生的社会效益和经济效益情况、5年内保护与传承计划等。
          </div>
          <div>三、其它说明该企业、单位在非物质文化遗产的保护与传承方面具有典型、示范意义的辅助材料。  </div>
          <div>来源：《文化部办公厅关于开展国家级非物质文化遗产生产性保护示范基地建设的通知》（办非遗函〔2010〕499号）</div>
        </el-collapse-item>
        <el-collapse-item
          title="10.如何正确使用中国非物质文化遗产标识"
        >
          <div>
            根据《中国非物质文化遗产标识管理办法的通知》规定，文化部是中国非物质文化遗产标识的权利人，其授权中国非物质文化遗产保护中心依照相关法规对中国非物质文化遗产标识及其使用进行保护和管理。
          </div>
          <div>
           任何单位、组织和个人使用中国非物质文化遗产标识使用中国非物质文化遗产标识，应当根据规定的式样和颜色用于相应场合，按比例放大或缩小，不得更改图形的比例关系和样式
          </div>
          <div>中国非物质文化遗产标识可用于公益活动和商业活动。如果使用人将中国非物质文化遗产标识用于商业活动，应当事前向中国非物质文化遗产保护中心提出申请。经审核同意后，申请人与中国非物质文化遗产保护中心签订中国非物质文化遗产标识许可使用协议书。协议双方按照协议书的具体约定，行使权利，承担义务。</div>
          <div>中国非物质文化遗产保护中心按照有关法律、行政法规和权利人的要求，处理中国非物质文化遗产标志用于商业活动的有关事务。所得收入，全部用于非物质文化遗产保护。中国非物质文化遗产保护中心会定期将中国非物质文化遗产标识使用和管理工作的情况报送中国非物质文化遗产标识权利人备案。</div>
          <div>来源：《文化部办公厅关于印发中国非物质文化遗产标识管理办法的通知》（办社图发〔2007〕14号）</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      isShowKnowledge: true,
      isShowWork: false,
      maxSpeed: 60, //最大输入速度
      minSpeed: 20, //最小输入速度
      textList: [
        "当你看到这里,一定对安康是的非物质文化遗产有了一定的了解吧",
        "为了扩展我们的知识,特意开设了本窗口",
        "如果你原以丰富自己的知识,请继续向下翻阅吧",
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
  computed: {
    el() {
      return this.$refs.prompt;
    },
  },
  methods: {
    showKnowledge() {
      if (this.isShowKnowledge) {
        return;
      } else {
        this.isShowWork = false;
        this.isShowKnowledge = true;
        this.$refs.wBtn.style.background = "#fff";
        this.$refs.wBtn.style.color = "#6b7206c4";
        this.$refs.wBtn.style.borderColor = "#6b7206c4";
        this.$refs.kBtn.style.background = "#f78152c4";
        this.$refs.kBtn.style.color = "#fff";
        this.$refs.kBtn.style.borderColor = "transparent";
      }
    },
    showWork() {
      if (this.isShowWork) {
        return;
      } else {
        this.isShowKnowledge = false;
        this.isShowWork = true;
        this.$refs.kBtn.style.background = "#fff";
        this.$refs.kBtn.style.color = "#f78152c4";
        this.$refs.kBtn.style.borderColor = "#f78152c4";
        this.$refs.wBtn.style.background = "#6b7206c4";
        this.$refs.wBtn.style.color = "#fff";
        this.$refs.wBtn.style.borderColor = "transparent";
      }
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
  },
  mounted() {
    this.start();
    this.$refs.kBtn.style.background = "#f78152c4";
    this.$refs.kBtn.style.color = "#fff";
    this.$refs.kBtn.style.borderColor = "transparent";
  },
  beforeRouteLeave(to, from, next) {
    this.$parent.closeNav();
    next();
  },
};
</script>

<style lang="less" scoped>
#knowledge {
  width: 100%;
  height: 100vh;
  .knowledge-header {
    width: 100%;
    height: 100vh;
    background: url("../assets/img/knowleage.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    .konwledge-header-content {
      width: 100%;
      height: 100%;
      color: #fff;
      min-width: 1400px;
      background: rgba(0, 0, 0, 0.507);
      position: relative;
      h4 {
        font-size: 2em;
        letter-spacing: 20px;
        text-align: center;
        position: relative;
        top: 30%;
        &::before {
          content: "";
          display: block;
          width: 0.8em;
          height: 1.5em;
          background: url("../assets/img/rawBiao.png") no-repeat;
          position: absolute;
          top: 15%;
          left: 42.5%;
        }
        &::after {
          content: "";
          display: block;
          width: 0.8em;
          height: 1.5em;
          background: url("../assets/img/rawBiao.png") no-repeat;
          position: absolute;
          left: 54.7%;
          top: -15%;
          transform: rotate(180deg);
          // background-size: cover;
        }
      }
      p {
        position: relative;
        top: 40%;
        text-align: center;
      }
      img {
        position: absolute;
        top: 80%;
        width: 7%;
        left: calc(50% - 3.5%);
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
  .knowledge-main {
    width: 100%;
    padding: 100px;
    // margin-right: 0;
    // margin-right: 100px;
    .show-btn {
      width: 100%;
      height: 100px;
      position: relative;
      .el-button {
        position: absolute;
        color: rgba(247, 129, 82, 0.767);
        border: 1px solid rgb(228, 156, 24);
        font-size: 1.3em;
        left: 30%;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          background: rgba(248, 126, 70, 0.801);
          border: 1px solid transparent;
          color: #fff;
        }
      }
      .btn2 {
        left: 50%;
        color: rgba(107, 114, 6, 0.767);
        border: 1px solid rgb(90, 114, 2);
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          background: rgba(87, 120, 2, 0.801);
          border: 1px solid transparent;
          color: #fff;
        }
      }
    }
    .el-collapse {
      width: 87%;
      .el-collapse-item__header {
        font-size: 1.2em;
      }
    }
  }
}
</style>

<style>
.el-collapse-item__header {
  font-size: 1.3em;
}
.el-collapse-item__content {
  text-indent: 2em;
  font-size: 1.1em;
  color: #888888;
}
</style>
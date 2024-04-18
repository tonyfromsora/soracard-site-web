const homepageContents = {
  en: {
    seoMeta: {
      title: 'SORA Card | Value Freedom',
    },
    hero: {
      title: 'More than just a card',
      description: 'Access the new era of interoperable finance, all in the palm of your hands.',
      applyButtonTitle: 'Apply',
      moreButtonTitle: 'Learn more',
      ecosystemLogosLine: 'Your fiat gateway to crypto',
    },
    features: {
      title: 'The ultimate all-in-one self-custodial crypto + neobanking-inspired solution',
      items: [
        'Full ownership over your crypto',
        'Easy access to payments and DeFi',
        'Real-time exchange rate when buying/selling crypto',
        'Fiat access to major blockchains with true interoperability*',
      ],
      disclaimer:
        '*Currently SORA network with a bridge to Ethereum, Polkadot and Kusama, soon other EVM networks and Bitcoin',
    },
    value: {
      label: 'Value Freedom',
      title: 'Full ownership of your crypto with easy access to payments and DeFi',
      items: [
        {
          icon: 'wallet',
          title: 'Self-Custodial Wallet',
          description: 'Neobanking-style app linking decentralized crypto and fiat cash',
        },
        {
          icon: 'card',
          title: 'Debit Card',
          description: 'Ready to use at more than 90 million card provider merchants globally',
        },
        {
          icon: 'cash',
          title: 'IBAN Account',
          description: 'An EU-based international e-money account (other countries coming soon)',
        },
        {
          icon: 'lock',
          title: 'Privacy & Security',
          description: 'Highest privacy and security measures possible',
        },
      ],
    },
    accordionBanner: {
      title: 'Accelerate your financial freedom today',
      items: [
        {
          title: 'Self-custody',
          content: [
            'Retain full custody (possession) of your crypto assets at all times. The SORA wallet is merely an interface to manage your assets, connecting directly to the blockchain.',
          ],
        },
        {
          title: 'Ease of use',
          content: [
            'Access to both physical and digital cards. Use SORA Card at more than 90 million card provider merchants globally. Apple Pay and Google Pay compatibility (* will be available shortly in Phase 2 of SORA Card rollout).',
          ],
        },
        {
          title: 'More than spending crypto',
          content: [
            'Buy, Sell, Earn, Pay, Trade, Receive and more! All in one place, at your discretion. Thanks to the integrated ',
            {
              title: 'Polkaswap',
              href: 'https://polkaswap.io/',
            },
            ' decentralized exchange and the ',
            {
              title: 'Demeter',
              href: 'https://farming.deotoken.io/',
            },
            ' DeFi platform.',
          ],
        },
        {
          title: 'Privacy and Security',
          content: [
            'Access and actions regarding your crypto assets do not require any personal information like names and addresses — you just need your private key for access and full ownership.',
          ],
        },
      ],
    },
    possibilities: {
      label: 'Possibilities',
      title: 'Superior privacy, limits and interoperability',
      items: [
        {
          title: 'Highest possible privacy features',
          description:
            'KYC with IBAN (fiat) provider only, crypto completely self-custodial and decentralized',
        },
        {
          title: 'High limits and low fees',
          description:
            'Top of the line cash withdrawal limits, as well as spending and top-up limits and options',
        },
        {
          title: 'Premium crypto integrations',
          description:
            'SORA Card is a unique all-in-one self-custodial crypto wallet and fiat debit card integrated with a multi-chain decentralized exchange and DeFi platform',
        },
      ],
      comparisonDetails: [
        'See this ',
        {
          title: 'article',
          href: '/blog/sora-card-vs-others',
        },
        ' for a more in depth comparison',
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          title: 'Can I get SORA Card if I live in ___________?',
          content: [
            'SORA Card is available for order to individuals worldwide, subject to the successful completion of the KYC procedure. The approval of your application depends on passing KYC, which takes into account your residency (not nationality). Please note that residents of certain countries like Russia, Iran, and DPRK are not eligible for SORA Card. For a complete list of restricted countries, please refer to ',
            {
              title: 'soracard.com/blacklist',
              href: '/blacklist',
            },
            '. For example, a Russian national residing in France can order SORA Card, whereas a Russian resident in Moscow cannot pass the KYC.',
          ],
        },
        {
          title: 'Which cryptocurrencies can I use with SORA Card?',
          content: [
            'Currently, SORA Card supports direct conversion between XOR and EUR. Through ',
            {
              title: 'Polkaswap.io',
              href: 'https://polkaswap.io',
            },
            ', it is easy to bridge and swap Ethereum network tokens such as ETH and DAI to top up your SORA Card with XOR or purchase these tokens with Euro. Support for other networks and their native tokens will be added in the near future.',
          ],
        },
        {
          title: 'How can I add funds to SORA Card?',
          content: ['You can top up your SORA Card using XOR ↔ EUR or SEPA (bank transfer).'],
        },
        {
          title: 'Can I use SORA Card globally?',
          content: [
            'Absolutely! SORA Card can be used anywhere on the global card provider network.',
          ],
        },
        {
          title: 'How secure is SORA Card?',
          content: [
            'SORA Card prioritizes the highest level of security and data protection. Your user data and crypto assets remain inaccessible to SORA. Only the card issuer and card provider network have access to your transaction details. SORA Card utilizes self-custodial wallet technology, ensuring that you alone have access and control over your crypto assets. Our applications implement robust security measures, including two-factor authentication and biometric identification. Moreover, the decentralized nature of the SORA network means that no single entity has control over the network or your transactions.',
          ],
        },
        {
          title: 'What are the spending limits for SORA Card?',
          content: [
            'For detailed information on spending limits, please refer to our website at ',
            {
              title: 'soracard.com/fees/#4',
              href: '/fees/#4',
            },
          ],
        },
        {
          title: 'What are the usage fees associated with SORA Card?',
          content: [
            'You can find the details regarding SORA Card usage fees on our website at ',
            {
              title: 'soracard.com/fees',
              href: '/fees',
            },
            '. As an expression of gratitude to the supportive SORA community, the first 5,000 applicants will not be charged any yearly or monthly fees.',
          ],
        },
        {
          title: 'How can I obtain SORA Card?',
          content: [
            'To apply for SORA Card, you can visit ',
            {
              title: 'Polkaswap.io',
              href: 'https://polkaswap.io/',
            },
            ' or use ',
            {
              title: 'SORA Wallet',
              href: 'https://sora.org/wallet',
            },
            '. The application process includes completing the KYC procedure, which involves providing personal information such as a selfie, an ID document, and proof of address. Once approved, you can order your physical card and set up your digital account and card.',
          ],
        },
        {
          title:
            'What security measures does SORA Card have in place to protect my funds and data?',
          content: [
            'SORA Card ensures the utmost security for your funds and data. User data and crypto assets are not accessible to SORA; only the card issuer and card provider network have access to transaction details. SORA Card employs self-custodial wallet technology, granting you exclusive access and control over your crypto assets. Our applications incorporate multiple security measures, including two-factor authentication, biometric identification, and transaction limits, all aimed at safeguarding your funds.',
          ],
        },
      ],
    },
    blog: {
      title: 'Latest blog posts',
      viewAllButtonTitle: 'See All',
    },
    getCardBanner: {
      title: 'Get SORA Card — Value Freedom',
      description:
        'SORA card is a neobanking-style solution that gives direct access to decentralized and non-custodial crypto. SORA does not have access to your crypto assets or user data. We value freedom.',
      applyButtonTitle: 'Apply now',
    },
  },
  be: {
    seoMeta: {
      title: 'SORA Card | Свабода выбару',
    },
    hero: {
      title: 'Не толькі картка',
      description:
        'Атрымайце доступ да новай эры інтэрпрабельнага фінансавання, усё ў вашых руках.',
      applyButtonTitle: 'Праграма',
      moreButtonTitle: 'Даведайцеся больш',
      ecosystemLogosLine: 'Ваш шлюз ад фіата да крыптавалют',
    },
    features: {
      title: 'Найкращае ўсё ў адным рашэнні: самакустадыяльны крыпта + неабанкаўская канцэпцыя',
      items: [
        'Поўная ўлада над вашай крыптавалютай',
        'Лёгкі доступ да плацяжоў і DeFi',
        'Рэальны курс абмену пры куплі / продажу крыптавалюты',
        'Доступ да галоўных блокчэйнаў з прысутнасцю сапраўднай інтэраперабельнасці*',
      ],
      disclaimer:
        '*У дадзены момант сетка SORA з мостам да Ethereum, Polkadot і Kusama, у бліжэйшым часе будуць дададзеныя іншыя сеткі EVM і Bitcoin',
    },
    value: {
      label: 'Свабода выбару',
      title: 'Поўная ўлада над вашай крыптавалютай з лёгкім доступам да плацяжоў і DeFi',
      items: [
        {
          icon: 'wallet',
          title: 'Самакустадыяльны гаманец',
          description:
            'Прыкладанне ў стылі неабанкаўскага падыходу, якое злучае дэцэнтралізаваную крыптавалюту і фіатныя грошы',
        },
        {
          icon: 'card',
          title: 'Дэбетавая карта',
          description:
            'Гатовая да выкарыстання ў болей чым 90 мільёнах таргавых пастаўшчыкаў картак па ўсім свеце',
        },
        {
          icon: 'cash',
          title: 'ІBAN-рахунак',
          description: 'Міжнародны электронны грошавы рахунак на аснове ЕС (іншыя краіны скора)',
        },
        {
          icon: 'lock',
          title: 'Прыватнасць і бяспека',
          description: 'Найвышэйшыя меры прыватнасці і бяспекі',
        },
      ],
    },
    accordionBanner: {
      title: 'Прыйміце свабоду фінансавай незалежнасці ў гэты дзень',
      items: [
        {
          title: 'Самакустадыяльнасць',
          content: [
            'Захавайце поўную ўладу (валаданне) вашымі крыптавалютнымі актывамі за ўсяго часу. Гаманец SORA гэта проста інтэрфейс для кіравання вашымі актывамі, які злучаецца безпасрэдна з блокчэйнам.',
          ],
        },
        {
          title: 'Лёгкі доступ',
          content: [
            'Доступ да фізічных і электронных картак. Выкарыстоўвайце карту SORA ў болей чым 90 мільёнах таргавых пастаўшчыкаў картак па ўсім свеце. Сумяшчальнасць з Apple Pay і Google Pay (* скора будзе даступна ў фазе 2 выкіда карты SORA).',
          ],
        },
        {
          title: 'Больш, чым проста купля крыптавалюты',
          content: [
            'Купляйце, працуйце, атрымлівайце, плаціце, торгуйце, атрымлівайце і г.д.! Усё ў адным месцы, па вашаму выліку. Дзякуючы інтэграванаму ',
            {
              title: 'Polkaswap',
              href: 'https://polkaswap.io/',
            },
            ' дэцэнтралізаванаму абмену і ',
            {
              title: 'Demeter',
              href: 'https://farming.deotoken.io/',
            },
            ' платформе DeFi.',
          ],
        },
        {
          title: 'Прыватнасць і бяспека',
          content: [
            'Доступ і дзеянні звязаныя з вашымі крыптавалютнымі актывамі не патрабуюць ніякіх асабістых дадзеных, такіх як імёны і адрасы — вам проста неабходны ваш прыватны ключ для доступу і поўнай улады.',
          ],
        },
      ],
    },
    possibilities: {
      label: 'Магчымасці',
      title: 'Пераважнасць прыватнасці, лімітам і інтэраперабельнасці',
      items: [
        {
          title: 'Найвышэйшыя магчымасці прыватнасці',
          description:
            'KYC толькі з пастаўшчыкам IBAN (фіат), крыптавалюта поўнастю самакустадыяльная і дэцэнтралізаваная',
        },
        {
          title: 'Высокія ліміты і нізкія тарыфы',
          description:
            'Ліміты на зняцце грошай верхняй лініі, а таксама ліміты і магчымасці па папоўненню і плацежах',
        },
        {
          title: 'Прыэмныя інтэграцыі крыптавалют',
          description:
            'SORA Card — унікальны самакустадыяльны крыптавалютны гаманец і фіатная дэбетавая карта, злучаныя з мультічэновым дэцэнтралізаваным абменам і платформай DeFi',
        },
      ],
      comparisonDetails: [
        'Гл. гэты ',
        {
          title: 'артыкул',
          href: '/blog/sora-card-vs-others',
        },
        ' для болей глыбокага параўнання',
      ],
    },
    faq: {
      title: 'Частыя пытанні',
      items: [
        {
          title: 'Магу я атрымаць карту SORA, калі я жыву ў ___________?',
          content: [
            'Карта SORA даступная для замовы фізічным асобам па ўсім свеце, за ўмовай паспяховага завяршэння працэдуры KYC. Адказ на вашу заяўку залежыць ад паспяху праходжання KYC, які ўлічвае ваша месцазнаходжанне (не грамадзянства). Калі ласка, звярніце ўвагу, што жыхары некаторых краін, такіх як Расія, Іран і КНДР, не маюць права на атрыманне карты SORA. Для поўнага спісу абмежаваных краін звярніцеся да ',
            {
              title: 'soracard.com/blacklist',
              href: '/blacklist',
            },
            '. Напрыклад, грамадзянін Расіі, які жыве ў Францыі, можа замовіць карту SORA, у той час як жыхар Масквы не можа пройсці KYC.',
          ],
        },
        {
          title: 'Якія крыптавалюты я магу выкарыстоўваць з картай SORA?',
          content: [
            'Зараз карта SORA падтрымлівае простае канвертаванне паміж XOR і EUR. Праз ',
            {
              title: 'Polkaswap.io',
              href: 'https://polkaswap.io',
            },
            ', лёгка абмацаваць і абменіваць токены сеткі Ethereum, такія як ETH і DAI, каб папоўніць вашу карту SORA з дапамогай XOR або набыць гэтыя токены за еўра. Падтрымка для іншых сетак і іх мацерскіх токенаў будзе дададзена ў бліжэйшым будучыні.',
          ],
        },
        {
          title: 'Як я магу папоўніць карту SORA?',
          content: [
            'Вы можаце папоўніць вашу карту SORA, выкарыстоўваючы XOR ↔ EUR або SEPA (банкаўскі перавод).',
          ],
        },
        {
          title: 'Ці магу я выкарыстоўваць карту SORA усюды па ўсім свеце?',
          content: [
            'Абаладзьце! Карту SORA можна выкарыстоўваць у любым месцы на глабальнай сетцы пастаўшчыкаў картак.',
          ],
        },
        {
          title: 'Як бяспечная карта SORA?',
          content: [
            'Карта SORA прызначае высокае ўзроўню бяспекі і абароны даных. Вашы асабістыя даныя і крыптавалютныя актывы застаюцца недаступнымі для SORA. Толькі выдавец карты і глабальная сетка пастаўшчыкаў картак маюць доступ да дэталей вашых трансакцый. Карта SORA выкарыстоўвае тэхналогію самакустадыяльнага гаманцы, што забяспечвае толькі вам доступ і кантроль над вашымі крыптавалютнымі актывамі. Нашы прыкладанні ўплываюць меры бяспекі, уключаючы двухфактарную аўтэнтыфікацыю, біяметрычную ідэнтыфікацыю і меры абмежавання трансакцый, усё з мэтай абароны вашых фінансавых сродкаў.',
          ],
        },
        {
          title: 'Якія ліміты плацяжоў для карты SORA?',
          content: [
            'Для падрабязнай інфармацыі пра ліміты плацяжоў, калі ласка, звярніцеся да нашага сайту на ',
            {
              title: 'soracard.com/fees/#4',
              href: '/fees/#4',
            },
          ],
        },
        {
          title: 'Якія тарыфы за выкарыстанне звязаныя з картай SORA?',
          content: [
            'Вы можаце знайсці дэталі ў дачэпленні да тарыфаў за выкарыстанне карты SORA на нашым сайце на ',
            {
              title: 'soracard.com/fees',
              href: '/fees',
            },
            '. Як выказ падзякі супольнасці падтрымківаючай SORA, першыя 5 000 заяўнікаў не будуць абкладвацца гадавымі або месячнымі тарыфамі.',
          ],
        },
        {
          title: 'Як я магу атрымаць карту SORA?',
          content: [
            'Каб падаць заяўку на карту SORA, вы можаце наведаць ',
            {
              title: 'Polkaswap.io',
              href: 'https://polkaswap.io/',
            },
            ' або выкарыстоўваць ',
            {
              title: 'SORA Wallet',
              href: 'https://sora.org/wallet',
            },
            '. Працэс заяўкі ўключае ў сябе завяршэнне працэдуры KYC, якая павінна даслаць асабістую інфармацыю, такую як сэлфі, дакумент ідэнтыфікацыі і доказ адрасу. Пасля затвярджэння вы можаце замовіць сваю фізічную карту і наладзіць ваш цыфравы рахунак і карту.',
          ],
        },
        {
          title: 'Якія меры бяспекі ўжывае карта SORA для абароны маіх сродкаў і дадзеных?',
          content: [
            'Карта SORA забяспечвае максімальную бяспеку вашых сродкаў і дадзеных. Карта SORA выкарыстоўвае тэхналогію самакустадыяльнага гаманцы, гарантуючы вам асабісты доступ і кантроль над вашымі крыптавалютнымі актывамі. Нашы прыкладанні ўключаюць некалькі мер бяспекі, уключаючы двухфактарную аўтэнтыфікацыю, біяметрычную ідэнтыфікацыю і меры абмежавання трансакцый, усё з мэтай абароны ваших фінансавых сродкаў.',
          ],
        },
      ],
    },
    blog: {
      title: 'Апошнія запісы ў блогу',
      viewAllButtonTitle: 'Глядзець усё',
    },
    getCardBanner: {
      title: 'Атрымаць карту SORA — Свабода выбару',
      description:
        'Карта SORA — гэта неабанкаўскае рашэнне, якое забяспечвае просты доступ да дэцэнтралізаванай і недаступнай для ўлады крыптавалюты. SORA не мае доступу да вашых крыптавалютных актываў або дадзеных карыстальнікаў. Мы цанім свабоду.',
      applyButtonTitle: 'Падаць заяўку зараз',
    },
  },
}

export default homepageContents

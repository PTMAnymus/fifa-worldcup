import Group from "../../../Components/Group";
import {
    QatarFlag,
    EcuadorFlag,
    SenegalFlag,
    NetherlandsFlag,
    EnglandFlag,
    IranFlag,
    USAFlag,
    WalesFlag,
    ArgentinaFlag,
    SaudiArabiaFlag,
    MexicoFlag,
    PolandFlag,
    FrenchFlag,
    AustraliaFlag,
    DenmarkFlag,
    TunisiaFlag,
    SpainFlag,
    CostaRicaFlag,
    GermanyFlag,
    JapanFlag,
    BrasilFlag,
    SerbiaFlag,
    SwitzerlandFlag,
    CameroonFlag,
    BelgiumFlag,
    CanadarFlag,
    MarocFlag,
    CroatiaFlag,
    PortugalFlag,
    GhanaFlag,
    UruguayFlag,
    KoreaFlag,
} from "../../../utils/constants/images.js"


const GroupState = () => {
    const groupData = [
        {
            group: "A",
            team: [
                {
                    icon: QatarFlag,
                    country: "Qatar",
                },
                {
                    icon: EcuadorFlag,
                    country: "Ecuador",
                },
                {
                    icon: SenegalFlag,
                    country: "Senegal",
                },
                {
                    icon: NetherlandsFlag,
                    country: "Hà Lan",
                }
            ]
        },
        {
            group: "B",
            team: [
                {
                    icon: EnglandFlag,
                    country: "Anh",
                },
                {
                    icon: IranFlag,
                    country: "Iran",
                },
                {
                    icon: USAFlag,
                    country: "Mỹ",
                },
                {
                    icon: WalesFlag,
                    country: "Xứ Wales",
                }
            ]
        },
        {
            group: "C",
            team: [
                {
                    icon: ArgentinaFlag,
                    country: "Argentina",
                },
                {
                    icon: SaudiArabiaFlag,
                    country: "Ả Rập Xê Út",
                },
                {
                    icon: MexicoFlag,
                    country: "Mexico",
                },
                {
                    icon: PolandFlag,
                    country: "Ba Lan",
                }
            ]
        },
        {
            group: "D",
            team: [
                {
                    icon: FrenchFlag,
                    country: "Pháp",
                },
                {
                    icon: AustraliaFlag,
                    country: "Úc",
                },
                {
                    icon: DenmarkFlag,
                    country: "Đan Mạch",
                },
                {
                    icon: TunisiaFlag,
                    country: "Tunisia",
                }
            ]
        },
        {
            group: "E",
            team: [
                {
                    icon: SpainFlag,
                    country: "Tây Ban Nha",
                },
                {
                    icon: CostaRicaFlag,
                    country: "Costa Rica",
                },
                {
                    icon: GermanyFlag,
                    country: "Đức",
                },
                {
                    icon: JapanFlag,
                    country: "Nhật Bản",
                }
            ]
        },
        {
            group: "F",
            team: [
                {
                    icon: BelgiumFlag,
                    country: "Bỉ",
                },
                {
                    icon: CanadarFlag,
                    country: "Canadar",
                },
                {
                    icon: MarocFlag,
                    country: "Maroc",
                },
                {
                    icon: CroatiaFlag,
                    country: "Croatia",
                }
            ]
        },
        {
            group: "G",
            team: [
                {
                    icon: BrasilFlag,
                    country: "Brasil",
                },
                {
                    icon: SerbiaFlag,
                    country: "Serbia",
                },
                {
                    icon: SwitzerlandFlag,
                    country: "Thụy Sĩ",
                },
                {
                    icon: CameroonFlag,
                    country: "Cameroon",
                }
            ]
        },
        {
            group: "H",
            team: [
                {
                    icon: PortugalFlag,
                    country: "Bồ Đào Nha",
                },
                {
                    icon: GhanaFlag,
                    country: "Ghana",
                },
                {
                    icon: UruguayFlag,
                    country: "Uruguay",
                },
                {
                    icon: KoreaFlag,
                    country: "Hàn Quốc",
                }
            ]
        },
    ];
    return (
        <div className="the-final__body__groupstate">
            {groupData.map((_group, _idx) => {
                return (
                        <Group Group={_group} />
                )
            })}
        </div>
    )
}

export default GroupState;
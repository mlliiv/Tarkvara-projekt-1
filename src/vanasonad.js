const folkWisdom = [
    "Ega õppimine pühapäevatöö ole.",
    "Parem varblane käes kui tuvi katusel.",
    "Kes ees, see mees.",
    "Varajane lind leiab tera.",
    "Kuidas töö, nõnda palk.",
	"Tasa sõuad, kaugele jõuad.",
    "Kes teisele auku kaevab, see ise sisse langeb.",
    "Aeg on raha.",
    "Tark ei torma.",
    "Kingitud hobuse suhu ei vaadata.",
    "Kus viga näed laita, seal tule ja aita.",
    "Rääkimine hõbe, vaikimine kuld.",
    "Mis täna tehtud, see homme mureta.",
    "Valel on lühikesed jalad.",
    "Pill tuleb pika ilu peale."
];

module.exports = async function() {
    let randomIndex = Math.floor(Math.random() * folkWisdom.length);
    return folkWisdom[randomIndex];
};
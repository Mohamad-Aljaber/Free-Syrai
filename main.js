// الوضع الليلي والنهاري
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

//من اجل تغير عند الضغط على السهم

var contentIndex = 0;
var contents = [
    { heading: "من نحن", text: "حكومة تمثل تطلعات الشعب السوري نحو الحرية والعدالة والمساواة تعمل من خلال مؤسساتها لخدمة أبناء سوريا، وتنظيم المناطق السورية وإدارتها، بشراكة مع المؤسسات والشخصيات الوطنية والجهات ذات العلاقة لتحقيق استقرار المجتمع السوري ونهضته." },
    { heading: "اعمالنا ", text: "   السعى في الاعتراف - بناء المدارس والمشافي ومراكز الرعاية الصحية - بناء جيل من اجل الاستمرار بالثورة والحرية" },
    { heading: " لأهداف والهيكلية", text: " إحدى أهم استراتيجيات الحكومة العمل على استثمار الموارد الوطنية لدعم القرار السيادي وستعمل الحكومة مع كل شركائها من أجل تخفيف معاناة الشعب السوري ودعم توجهاتها لتحقيق أهدافها في الحرية والكرامة والعدالة الاجتماعي" }
];
function changeContent(direction) {
    var heading = document.getElementById("heading");
    var textContent = document.getElementById("textContent");

    if (direction === 'next') {
        contentIndex = (contentIndex + 1) % contents.length;
    } else if (direction === 'prev') {
        contentIndex = (contentIndex - 1 + contents.length) % contents.length;
    }

    heading.textContent = contents[contentIndex].heading;
    textContent.textContent = contents[contentIndex].text;
}


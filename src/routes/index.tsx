import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BedDouble, Car, ChefHat, ChevronRight, Coffee, Flame, MapPin, Menu, MessageCircle, Phone, Shirt, Sparkles, Trees, WashingMachine, X } from "lucide-react";
import exterior from "@/assets/13dd299d-41b4-4d28-a31a-13b580a092ab.jpg.asset.json";
import roomMain from "@/assets/04175d4f-cd9e-494c-bad2-04b15759dd87.jpg.asset.json";
import roomTwin from "@/assets/e9ec0670-f703-420d-bbaa-6d67e4dcceba.jpg.asset.json";
import dining from "@/assets/041f1e00-7932-4eca-b71e-0b331fc6de8b.jpg.asset.json";
import living from "@/assets/3cf67b9e-ed6b-487f-a8db-3ba8a05aea7d.jpg.asset.json";
import bedroom from "@/assets/6834e2ad-ed15-4b5e-8657-c4090f082f30.jpg.asset.json";
import lounge from "@/assets/793a1ea5-6048-43fc-a355-b576db4c4801.jpg.asset.json";
import curtains from "@/assets/2e3d6a10-7b8b-42e3-96d1-92cd7e6aa71a.jpg.asset.json";
import qr from "@/assets/QR-код.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Дом посуточно в Терсколе | Приэльбрусье" },
    { name: "description", content: "Уютный дом в сосновом лесу в Терсколе. Цены, фотографии, удобства и контакты для бронирования." },
    { property: "og:title", content: "Дом посуточно в Терсколе" },
    { property: "og:description", content: "Дом у ручья в сосновом лесу Приэльбрусья — фото, цены и бронирование." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const navigation = [
  ["Фотогалерея", "gallery"], ["Стоимость проживания", "pricing"], ["Правила проживания", "rules"],
  ["О доме", "about"], ["Контакты", "contacts"], ["Реквизиты", "requisites"],
];

const comfort = [
  { icon: ChefHat, title: "Кухня", text: "Полноценная кухня со всем необходимым оборудованием и посудой для домашней готовки.", items: "Чай · кофе · сахар" },
  { icon: WashingMachine, title: "Быт", text: "В доме есть всё, чтобы удобно разместиться и ухаживать за вещами во время отдыха.", items: "Стиральная машина · средства для стирки · пылесос" },
  { icon: BedDouble, title: "Для гостей", text: "Подготовлены базовые принадлежности для комфортного проживания после активного дня в горах.", items: "Бельё · полотенца · шампунь · мыло · фен" },
  { icon: Shirt, title: "Уход за одеждой", text: "Можно быстро высушить и привести в порядок одежду перед следующим выходом.", items: "Утюг · гладильная доска · сушилка" },
  { icon: Trees, title: "Двор и отдых", text: "На территории можно собраться за столом и провести вечер на свежем воздухе.", items: "Беседка · садовая мебель · мангал" },
  { icon: Car, title: "Парковка и мангал", text: "Для автомобиля предусмотрено место, а для приготовления еды — всё основное.", items: "Парковка · угли · шампуры" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-warm/30">
      <nav className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-8">
          <a href="#top" className="min-w-0 truncate font-serif text-xl italic text-pine">Дом в Терсколе</a>
          <div className="hidden items-center gap-6 lg:flex">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}</div>
          <button type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center text-foreground lg:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="absolute inset-x-0 top-16 border-b border-border bg-background p-5 shadow-xl lg:hidden"><div className="mx-auto grid max-w-7xl gap-1">{navigation.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border/60 py-3 text-sm font-medium">{label}<ChevronRight size={16}/></a>)}</div></div>}
      </nav>

      <header id="top" className="overflow-hidden py-10 md:py-20"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-7 lg:col-span-7"><p className="text-xs font-semibold uppercase tracking-widest text-pine">Приэльбрусье · Терскол</p><h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">Дом в сосновом лесу у горного ручья</h1><p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">Тихое место для отдыха в горах: уютный деревянный дом, собственный двор и всё необходимое для комфортного проживания.</p><div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center"><a href="tel:+79287150041" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-pine px-6 text-sm font-semibold text-pine-foreground transition-transform hover:-translate-y-0.5"><Phone size={17}/> Забронировать</a><div className="flex min-w-0 items-start gap-3 sm:border-l sm:border-border sm:pl-5"><MapPin className="mt-0.5 shrink-0 text-pine" size={18}/><span className="text-sm text-muted-foreground">Терскол, ул. имени К.Ш. Кулиева, 12</span></div></div></div>
        <div className="lg:col-span-5"><img src={exterior.url} alt="Дом в Терсколе вечером зимой" className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl shadow-foreground/10" fetchPriority="high" /></div>
      </div></header>

      <section id="gallery" className="scroll-mt-20 bg-muted/55 py-20"><div className="mx-auto max-w-7xl px-5 md:px-8"><p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pine">Фотогалерея</p><h2 className="mb-10 text-3xl md:text-4xl">Пространство дома</h2><div className="grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">
        <img src={roomMain.url} alt="Спальня с двуспальной кроватью" loading="lazy" className="col-span-2 row-span-2 size-full rounded-lg object-cover"/><img src={roomTwin.url} alt="Комната с тремя кроватями" loading="lazy" className="size-full rounded-lg object-cover"/><img src={dining.url} alt="Столовая зона" loading="lazy" className="size-full rounded-lg object-cover"/><img src={living.url} alt="Гостиная и лестница" loading="lazy" className="col-span-2 size-full rounded-lg object-cover"/><img src={bedroom.url} alt="Светлая спальня" loading="lazy" className="size-full rounded-lg object-cover"/><img src={lounge.url} alt="Спальня с диваном" loading="lazy" className="size-full rounded-lg object-cover"/><img src={curtains.url} alt="Комната с панорамным окном" loading="lazy" className="col-span-2 size-full rounded-lg object-cover"/>
      </div></div></section>

      <section id="pricing" className="scroll-mt-20 py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-16"><div className="space-y-5 lg:col-span-5"><p className="text-xs font-semibold uppercase tracking-widest text-pine">Цены на 2026–2027 год</p><h2 className="text-3xl md:text-4xl">Стоимость проживания</h2><p className="leading-7 text-muted-foreground">Бронь дома строго по предоплате. По всем вопросам звоните — будем рады помочь. Возможность скидки уточняйте при бронировании.</p></div><div className="space-y-4 lg:col-span-7"><Price label="Новогодние праздники" dates="30.12.2026 — 08.01.2027" price="35 000 ₽" featured/><Price label="Основной период" dates="08.01.2027 — 30.12.2027" price="15 000 ₽"/></div></div></section>

      <section id="rules" className="scroll-mt-20 bg-pine py-14 text-pine-foreground"><div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[auto_1fr] md:items-center md:px-8"><Sparkles className="size-10 text-warm"/><div><h2 className="text-2xl">Правила бронирования</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-pine-foreground/75">Дом бронируется строго после внесения предоплаты. Перед переводом свяжитесь с владельцем по телефону, подтвердите свободные даты и сумму.</p></div></div></section>

      <section id="about" className="scroll-mt-20 py-20"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pine">О доме</p><h2 className="text-3xl md:text-4xl">Всё для комфортного отдыха</h2><p className="mt-5 leading-7 text-muted-foreground">Дом расположен в сосновом лесу рядом с текущим ручейком. Внутри подготовлены бытовые мелочи, а на территории — место для автомобиля и отдыха на свежем воздухе.</p></div><div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{comfort.map(({icon: Icon,title,text,items}) => <article key={title} className="border-t border-border pt-6"><Icon className="mb-5 text-pine" size={25}/><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><p className="mt-4 text-xs font-medium leading-5 text-pine">{items}</p></article>)}</div></div></section>

      <footer id="contacts" className="scroll-mt-20 bg-night py-20 text-background"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="grid gap-14 lg:grid-cols-12"><div className="space-y-10 lg:col-span-4"><div><p className="mb-3 text-xs font-semibold uppercase tracking-widest text-warm">Связаться</p><h2 className="text-3xl">Контакты</h2><div className="mt-6 space-y-3"><a className="block text-xl hover:text-warm" href="tel:+79287150041">8 (928) 715-00-41</a><a className="block text-xl hover:text-warm" href="tel:+79289160041">8 (928) 916-00-41</a></div></div><div><p className="mb-3 text-xs uppercase tracking-widest text-background/40">Адрес</p><p className="max-w-sm text-sm leading-6 text-background/75">Кабардино-Балкарская Республика, Эльбрусский р-н, с. Терскол, ул. имени К.Ш. Кулиева, 12</p></div></div>
        <div id="requisites" className="scroll-mt-20 rounded-lg border border-background/10 bg-background/5 p-6 md:p-8 lg:col-span-8"><div className="grid gap-8 md:grid-cols-[1fr_auto]"><div><h3 className="font-medium text-background">Реквизиты для предоплаты</h3><dl className="mt-6 grid gap-3 text-xs leading-5 text-background/65"><Data label="Наименование" value="ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ СОКУРОВА АМИНАТ ШАХЫМОВНА"/><Data label="ИНН / ОГРНИП" value="072195552785 / 326070000003368"/><Data label="Расчётный счёт" value="40802810060640002939"/><Data label="Банк" value="СТАВРОПОЛЬСКОЕ ОТДЕЛЕНИЕ N5230 ПАО СБЕРБАНК"/><Data label="БИК / Корсчёт" value="040702615 / 30101810907020000615"/><Data label="ИНН / КПП банка" value="7707083893 / 072543001"/></dl></div><div className="flex flex-col items-center justify-center border-background/10 md:border-l md:pl-8"><img src={qr.url} alt="QR-код для внесения предоплаты" className="size-48 rounded-lg bg-background object-cover"/><p className="mt-4 max-w-48 text-center text-xs leading-5 text-background/55">Отсканируйте после подтверждения дат по телефону</p></div></div></div></div><div className="mt-16 border-t border-background/10 pt-6 text-xs text-background/35">Дом в Терсколе · Приэльбрусье</div></div></footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col-reverse items-end gap-2 lg:hidden"><button type="button" aria-label="Открыть способы связи" aria-expanded={chatOpen} onClick={() => setChatOpen(!chatOpen)} className="grid size-14 place-items-center rounded-full bg-pine text-pine-foreground shadow-xl ring-4 ring-background">{chatOpen ? <X/> : <MessageCircle/>}</button>{chatOpen && <div className="flex flex-col gap-2"><Social href="https://max.ru/+79287150041" label="MAX" text="M"/><Social href="tg://resolve?phone=79287150041" label="Telegram" text="TG"/><Social href="https://wa.me/79287150041" label="WhatsApp" text="WA"/></div>}</div>
    </div>
  );
}

function Price({label, dates, price, featured = false}: {label:string; dates:string; price:string; featured?:boolean}) { return <div className={`grid gap-4 rounded-lg border p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center ${featured ? "border-warm bg-warm/10" : "border-border bg-card"}`}><div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-widest text-pine">{label}</p><p className="mt-2 font-medium">{dates}</p></div><div className="sm:text-right"><p className="font-serif text-2xl">{price}</p><p className="text-xs text-muted-foreground">в сутки</p></div></div> }
function Data({label,value}:{label:string;value:string}) { return <div><dt className="text-background/35">{label}</dt><dd className="break-words text-background/75">{value}</dd></div> }
function Social({href,label,text}:{href:string;label:string;text:string}) { return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-12 place-items-center rounded-full bg-background text-[10px] font-bold text-foreground shadow-lg ring-1 ring-border">{text}</a> }

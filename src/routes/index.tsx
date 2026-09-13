import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDownRight, BedDouble, Car, ChefHat, ChevronRight, Flame, MapPin, Menu, MessageCircle, Phone, Shirt, Trees, WashingMachine, X } from "lucide-react";
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
    { name: "description", content: "Дом посуточно в сосновом лесу Терскола: фотографии, цены 2026–2027, удобства и контакты для бронирования." },
    { property: "og:title", content: "Дом посуточно в Терсколе" },
    { property: "og:description", content: "Дом у ручья в сосновом лесу Приэльбрусья — фото, цены и бронирование." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const navigation = [["Фотогалерея", "gallery"], ["Стоимость", "pricing"], ["Правила", "rules"], ["О доме", "about"], ["Контакты", "contacts"], ["Реквизиты", "requisites"]];
const gallery = [
  [roomMain, "Спальня с двуспальной кроватью", "md:col-span-7 md:row-span-2"],
  [roomTwin, "Комната с тремя кроватями", "md:col-span-5"],
  [dining, "Столовая зона", "md:col-span-5"],
  [living, "Гостиная и лестница", "md:col-span-5"],
  [bedroom, "Светлая спальня", "md:col-span-3"],
  [lounge, "Спальня с диваном", "md:col-span-4"],
  [curtains, "Комната с панорамным окном", "md:col-span-5"],
] as const;
const comfort = [
  { icon: ChefHat, no: "01", title: "Кухня", text: "Полноценная кухня, оборудование и посуда. Чай, кофе и сахар уже в доме." },
  { icon: WashingMachine, no: "02", title: "Быт", text: "Стиральная машина, средства для стирки и пылесос для долгого комфортного отдыха." },
  { icon: BedDouble, no: "03", title: "Для гостей", text: "Чистое бельё, полотенца, шампунь, мыло и фен после активного дня в горах." },
  { icon: Shirt, no: "04", title: "Одежда", text: "Утюг, гладильная доска и сушилка — всё необходимое под рукой." },
  { icon: Trees, no: "05", title: "Двор", text: "Беседка и садовая мебель среди сосен для спокойных вечеров на воздухе." },
  { icon: Car, no: "06", title: "Парковка", text: "Место для автомобиля, мангал, угли и шампуры на территории дома." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-accent">
    <nav className="fixed inset-x-0 top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:px-8">
        <a href="#top" className="font-display text-lg uppercase md:text-2xl">TERSKOL<span className="text-primary">.</span>DOM</a>
        <div className="hidden items-center gap-6 xl:flex">{navigation.map(([label,id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold uppercase transition-colors hover:text-primary">{label}</a>)}</div>
        <button type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center border-2 border-foreground bg-background transition-colors hover:bg-accent xl:hidden">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <div className="absolute inset-x-0 top-16 border-b-2 border-foreground bg-accent px-4 py-3 xl:hidden"><div className="mx-auto max-w-[1440px]">{navigation.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b-2 border-foreground py-3 font-display text-lg uppercase last:border-b-0">{label}<ChevronRight/></a>)}</div></div>}
    </nav>

    <header id="top" className="relative mt-16 min-h-[calc(100svh-4rem)] border-b-2 border-foreground bg-night text-background">
      <img src={exterior.url} alt="Освещённый дом в Терсколе зимой среди сосен" className="absolute inset-0 size-full object-cover" fetchPriority="high"/>
      <div className="absolute inset-0 bg-night/55"/>
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] flex-col justify-between px-4 py-7 md:px-8 md:py-12">
        <div className="flex items-start justify-between gap-4"><p className="border-2 border-background bg-night/70 px-3 py-2 text-xs font-bold uppercase">Приэльбрусье · Терскол</p><p className="max-w-64 text-right text-xs font-semibold uppercase md:text-sm">Сосновый лес<br/>Горный ручей</p></div>
        <div className="py-8"><h1 className="max-w-6xl text-[clamp(3rem,9vw,8.8rem)] leading-[0.9] uppercase">Ваш дом<br/><span className="text-primary">в сердце</span> гор</h1><p className="mt-6 max-w-xl text-lg leading-7 text-background/85 md:text-2xl">Тихий деревянный дом, собственный двор и всё необходимое для отдыха в Терсколе.</p></div>
        <div className="grid border-2 border-background bg-night/80 backdrop-blur-md md:grid-cols-[1fr_1fr_auto]">
          <div className="border-b-2 border-background p-4 md:border-b-0 md:border-r-2"><span className="block text-xs font-bold uppercase text-primary">Адрес</span><span className="mt-1 block font-semibold">ул. К.Ш. Кулиева, 12</span></div>
          <div className="border-b-2 border-background p-4 md:border-b-0 md:border-r-2"><span className="block text-xs font-bold uppercase text-primary">Стоимость</span><span className="mt-1 block font-semibold">от 15 000 ₽ / сутки</span></div>
          <a href="tel:+79287150041" className="flex min-h-16 items-center justify-center gap-3 bg-primary px-8 font-display uppercase text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"><Phone size={20}/> Забронировать</a>
        </div>
      </div>
    </header>

    <section id="gallery" className="scroll-mt-16 border-b-2 border-foreground py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><SectionTitle no="01" title="Смотрите сами" note="Фотогалерея"/><div className="grid auto-rows-[220px] grid-cols-1 gap-3 md:auto-rows-[260px] md:grid-cols-12">{gallery.map(([image,alt,span],i) => <figure key={alt} className={`group relative overflow-hidden border-2 border-foreground ${span}`}><img src={image.url} alt={alt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105"/><figcaption className="absolute bottom-0 left-0 border-r-2 border-t-2 border-foreground bg-accent px-3 py-2 text-xs font-bold uppercase">0{i+1} / {alt}</figcaption></figure>)}</div></div></section>

    <section id="pricing" className="scroll-mt-16 border-b-2 border-foreground bg-accent py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><SectionTitle no="02" title="Цена без мелкого шрифта" note="2026—2027"/><div className="grid gap-0 border-2 border-foreground lg:grid-cols-2"><Price label="Новогодние праздники" dates="30.12.2026 — 08.01.2027" price="35 000" featured/><Price label="Основной период" dates="08.01.2027 — 30.12.2027" price="15 000"/></div><div id="rules" className="scroll-mt-20 mt-6 grid border-2 border-foreground bg-night text-background md:grid-cols-[auto_1fr]"><div className="grid min-h-28 place-items-center bg-primary p-8"><Flame size={44}/></div><div className="p-6 md:p-8"><h3 className="text-xl uppercase md:text-3xl">Бронирование — строго по предоплате</h3><p className="mt-3 max-w-3xl text-background/70">Перед переводом позвоните владельцу, подтвердите свободные даты и итоговую сумму. Возможность скидки уточняйте при бронировании.</p></div></div></div></section>

    <section id="about" className="scroll-mt-16 border-b-2 border-foreground py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><SectionTitle no="03" title="В доме есть всё" note="Комфорт без компромиссов"/><div className="grid border-l-2 border-t-2 border-foreground sm:grid-cols-2 lg:grid-cols-3">{comfort.map(({icon:Icon,no,title,text}) => <article key={title} className="relative min-h-64 border-b-2 border-r-2 border-foreground p-6 transition-colors hover:bg-accent"><span className="absolute right-4 top-3 font-display text-5xl text-muted">{no}</span><Icon className="relative text-primary" size={32}/><h3 className="relative mt-12 text-2xl uppercase">{title}</h3><p className="relative mt-4 max-w-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section className="border-b-2 border-foreground bg-primary py-10 text-primary-foreground"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-4 md:flex-row md:items-center md:px-8"><p className="font-display text-3xl uppercase md:text-5xl">Горы ближе, чем кажется.</p><a href="tel:+79287150041" className="inline-flex h-14 items-center justify-center gap-3 border-2 border-primary-foreground px-7 font-display uppercase transition-colors hover:bg-background hover:text-foreground">Позвонить <ArrowDownRight/></a></div></section>

    <footer id="contacts" className="scroll-mt-16 bg-night py-16 text-background md:py-24"><div className="mx-auto max-w-[1440px] px-4 md:px-8"><SectionTitle no="04" title="Свяжитесь с нами" note="Бронирование" inverse/><div className="grid gap-8 lg:grid-cols-12"><div className="space-y-10 lg:col-span-4"><div><p className="text-xs font-bold uppercase text-primary">Телефоны</p><a className="mt-4 block font-display text-2xl hover:text-accent md:text-3xl" href="tel:+79287150041">8 928 715-00-41</a><a className="mt-2 block font-display text-2xl hover:text-accent md:text-3xl" href="tel:+79289160041">8 928 916-00-41</a></div><div className="flex gap-3 text-primary"><MapPin className="shrink-0"/><p className="max-w-sm text-background/70">Кабардино-Балкарская Республика, Эльбрусский район, с. Терскол, ул. имени К.Ш. Кулиева, 12</p></div></div>
        <div id="requisites" className="scroll-mt-20 border-2 border-background lg:col-span-8"><div className="border-b-2 border-background bg-accent p-4 font-display uppercase text-accent-foreground">Реквизиты для предоплаты</div><div className="grid md:grid-cols-[1fr_auto]"><dl className="grid content-start gap-4 p-5 text-sm md:p-8"><Data label="Наименование" value="ИП СОКУРОВА АМИНАТ ШАХЫМОВНА"/><Data label="ИНН / ОГРНИП" value="072195552785 / 326070000003368"/><Data label="Расчётный счёт" value="40802810060640002939"/><Data label="Банк" value="СТАВРОПОЛЬСКОЕ ОТДЕЛЕНИЕ N5230 ПАО СБЕРБАНК"/><Data label="БИК / Корсчёт" value="040702615 / 30101810907020000615"/><Data label="ИНН / КПП банка" value="7707083893 / 072543001"/></dl><div className="flex flex-col items-center justify-center border-t-2 border-background bg-background p-5 text-foreground md:border-l-2 md:border-t-0"><img src={qr.url} alt="QR-код для внесения предоплаты" className="size-52 object-cover"/><p className="mt-3 max-w-52 text-center text-xs font-semibold uppercase">Сканируйте после подтверждения дат</p></div></div></div></div><div className="mt-16 flex justify-between border-t-2 border-background pt-5 text-xs font-bold uppercase text-background/45"><span>TERSKOL.DOM</span><span>Приэльбрусье</span></div></div></footer>

    <div className="fixed bottom-4 right-4 z-50 flex flex-col-reverse items-end gap-2 lg:hidden"><button type="button" aria-label="Открыть способы связи" aria-expanded={chatOpen} onClick={() => setChatOpen(!chatOpen)} className="grid size-14 place-items-center border-2 border-foreground bg-accent text-accent-foreground shadow-[5px_5px_0_var(--color-foreground)]">{chatOpen ? <X/> : <MessageCircle/>}</button>{chatOpen && <div className="flex flex-col gap-2"><Social href="https://max.ru/+79287150041" label="MAX" text="M"/><Social href="tg://resolve?phone=79287150041" label="Telegram" text="TG"/><Social href="https://wa.me/79287150041" label="WhatsApp" text="WA"/></div>}</div>
  </div>;
}

function SectionTitle({no,title,note,inverse=false}:{no:string;title:string;note:string;inverse?:boolean}) { return <div className={`mb-10 grid gap-4 border-t-2 pt-5 md:grid-cols-[auto_1fr_auto] md:items-end ${inverse ? "border-background" : "border-foreground"}`}><span className="font-display text-primary">/{no}</span><h2 className="max-w-5xl text-4xl uppercase leading-none md:text-7xl">{title}</h2><span className={`text-xs font-bold uppercase ${inverse ? "text-background/50" : "text-muted-foreground"}`}>{note}</span></div> }
function Price({label,dates,price,featured=false}:{label:string;dates:string;price:string;featured?:boolean}) { return <article className={`min-h-80 p-6 md:p-10 ${featured ? "border-b-2 border-foreground bg-primary text-primary-foreground lg:border-b-0 lg:border-r-2" : "bg-background"}`}><p className="text-sm font-bold uppercase">{label}</p><p className="mt-2 font-semibold opacity-70">{dates}</p><p className="mt-14 font-display text-5xl leading-none md:text-7xl">{price}<span className="text-2xl"> ₽</span></p><p className="mt-2 text-sm font-bold uppercase">за сутки</p></article> }
function Data({label,value}:{label:string;value:string}) { return <div><dt className="text-xs font-bold uppercase text-primary">{label}</dt><dd className="mt-1 break-words text-background/75">{value}</dd></div> }
function Social({href,label,text}:{href:string;label:string;text:string}) { return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-12 place-items-center border-2 border-foreground bg-background text-xs font-bold text-foreground shadow-[3px_3px_0_var(--color-foreground)]">{text}</a> }
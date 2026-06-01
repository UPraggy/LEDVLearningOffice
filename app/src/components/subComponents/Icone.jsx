/* Mapeia o `iconeNome` (string em data/estrutura.js) para o componente lucide-react. */
import {
  Settings, Globe, FileText, Cloud, Video,
  Smartphone, MessageCircle, Banknote, KeyRound, Heart, Map, Camera,
  Sheet, Sparkles, Send, Linkedin, TrendingUp, Layers,
  Shield, AlertTriangle,
  Languages, Users, Hash, Sun, Utensils, MapPin, History,
  CalendarClock, MessageSquare, Briefcase, Globe2,
  MessagesSquare, House, ListChecks, Presentation, Palette,
  PiggyBank, Store, ShoppingCart, Instagram,
  Activity, Stethoscope, Scale, Plane, Phone, Newspaper, Mic,
  HelpCircle,
} from 'lucide-react';

const MAPA = {
  Settings, Globe, FileText, Cloud, Video,
  Smartphone, MessageCircle, Banknote, KeyRound, Heart, Map, Camera,
  Sheet, Sparkles, Send, Linkedin, TrendingUp, Layers,
  Shield, AlertTriangle,
  Languages, Users, Hash, Sun, Utensils, MapPin, History,
  CalendarClock, MessageSquare, Briefcase, Globe2,
  MessagesSquare, House, ListChecks, Presentation, Palette,
  PiggyBank, Store, ShoppingCart, Instagram,
  Activity, Stethoscope, Scale, Plane, Phone, Newspaper, Mic,
};

export default function Icone({ nome, size = 24, ...rest }) {
  const C = MAPA[nome] || HelpCircle;
  return <C size={size} strokeWidth={1.8} {...rest} />;
}

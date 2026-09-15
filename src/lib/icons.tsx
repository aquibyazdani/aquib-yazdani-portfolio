import {
  Atom, Award, BookOpen, Box, CheckCircle, Cloud, Code2, Cpu, Database, Dribbble, Facebook, FileCode, Figma, Folder,
  Gauge, GitBranch, Github, Globe, Instagram, Layers, Link, Linkedin, Lock, Mail, MessageCircle, MessageSquare,
  Paintbrush, Palette, Phone, Puzzle, Rocket, Server, Shield, Smartphone, Star, Terminal, TestTube2, Timer, Twitter,
  Users, Wind, Youtube, Zap, type LucideIcon,
} from "lucide-react";

// Icon names are stored as strings in the CMS so content stays serialisable.
// Only the icons listed here ship in the bundle; unknown names get a default.
const ICONS: Record<string, LucideIcon> = {
  Atom, Award, BookOpen, Box, CheckCircle, Cloud, Code2, Cpu, Database, Dribbble, Facebook, FileCode, Figma, Folder,
  Gauge, GitBranch, Github, Globe, Instagram, Layers, Link, Linkedin, Lock, Mail, MessageCircle, MessageSquare,
  Paintbrush, Palette, Phone, Puzzle, Rocket, Server, Shield, Smartphone, Star, Terminal, TestTube2, Timer, Twitter,
  Users, Wind, Youtube, Zap,
};

const BY_LOWER = new Map(Object.entries(ICONS).map(([k, v]) => [k.toLowerCase(), v]));

/** Best-effort match for social links whose icon field is blank. */
const SOCIAL_GUESS: Array<[RegExp, LucideIcon]> = [
  [/linkedin/i, Linkedin], [/github/i, Github], [/instagram/i, Instagram], [/whatsapp/i, MessageCircle],
  [/phone|call|tel/i, Phone], [/mail|email/i, Mail], [/twitter|^x$/i, Twitter], [/youtube/i, Youtube],
  [/facebook/i, Facebook], [/dribbble/i, Dribbble], [/figma/i, Figma],
];

export function iconFor(name: string | undefined, fallback: LucideIcon = Code2, guessFrom?: string): LucideIcon {
  if (name) {
    const hit = BY_LOWER.get(name.trim().toLowerCase().replace(/[-_\s]/g, ""));
    if (hit) return hit;
  }
  if (guessFrom) {
    const guess = SOCIAL_GUESS.find(([re]) => re.test(guessFrom));
    if (guess) return guess[1];
  }
  return fallback;
}

export const socialIcon = (icon: string, name: string) => iconFor(icon, Link, name);

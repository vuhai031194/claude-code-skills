# Design Blueprint: Idle Pet/Creature Collection RPG

*Generated: 2026-03-13 | Mode: Design Blueprint*

---

## 1. Game Concept

**Elevator Pitch:** A mobile idle RPG where players hatch, raise, evolve, and battle adorable creatures across a vibrant fantasy world — combining the universal appeal of pet collection with deep idle progression, co-op adventures, and home decoration. Think *Pokemon meets Egg Inc. meets Merge Dragons* — a game where watching your creatures grow while you're away feels just as rewarding as playing actively.

**Working Title:** *Idle Critters*

**USP:** Unlike traditional idle RPGs focused on dark fantasy heroes, every creature is cute, collectible, and evolvable through nurturing (feeding, playing, training) — not just gacha pulls. The creature habitat serves as both a decoratable home and a passive resource generator, giving players creative expression alongside strategic depth. Designed from the ground up for **equal appeal to men and women**.

---

## 2. Target Audience

| Attribute | Details |
|-----------|---------|
| **Age Range** | 22-45 (primary), 16-55 (secondary) |
| **Gender Target** | 50/50 — explicitly designed for gender-balanced appeal |
| **Player Archetype** | Collectors, Nurturers, Casual Strategists, Social Players |
| **Session Profile** | 3-8 min sessions, 5-7 times/day |
| **Platforms** | iOS + Android (simultaneous launch) |
| **Geo Focus** | US, Western Europe (primary); SEA, South Korea, Japan (secondary) |

**Comparable Game Players:**
- Egg Inc. players who want more creature variety and social features
- Pokemon GO players who want idle progression without walking
- Legend of Mushroom players who want even cuter art and creature focus
- Merge Dragons players who want deeper RPG systems
- Neko Atsume / cat collector fans who want more gameplay depth
- AFK Arena players (both male & female) who want a less aggressive theme

**Why Both Genders Will Love It:**
- Cute creatures with personality → universal appeal (proven by Pokemon, Tamagotchi, Neko Atsume)
- Nurturing/raising mechanic → strong female motivation driver without alienating men
- Auto-battle with team strategy → satisfies male optimization/competition drive
- Decoration/habitat building → creative expression for all players
- No violence framing → creatures "faint" or "retreat," never die
- Co-op focus over PvP → collaborative play preferred by women, enjoyed by men

---

## 3. Core Loop Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    ACTIVE PLAY (3-8 min)                 │
│                                                         │
│  Hatch Eggs → Raise Creatures → Form Team → Battle      │
│       ↑              │              │           │       │
│       │         Feed/Play/Train     │      Win Rewards   │
│       │              │              │           │       │
│       │              ▼              │           ▼       │
│       │        Evolve/Level Up      │    New Eggs/Mats   │
│       │              │              │           │       │
│       └──────────────┴──────────────┴───────────┘       │
│                                                         │
│  Decorate Habitat ←→ Unlock Biomes ←→ Attract Rare Eggs │
└─────────────┬───────────────────────────────┬───────────┘
              │                               │
              ▼                               ▼
┌─────────────────────────┐   ┌───────────────────────────┐
│    IDLE PROGRESSION     │   │    SOCIAL LAYER           │
│                         │   │                           │
│  Creatures forage       │   │  Visit friend habitats    │
│  Habitat generates gold │   │  Co-op boss raids         │
│  Eggs incubate offline  │   │  Gift creatures/items     │
│  Training continues     │   │  Guild expeditions        │
│                         │   │  Seasonal co-op events    │
│  (up to 12h offline)    │   │                           │
└─────────────────────────┘   └───────────────────────────┘
```

**Session Flow:**
1. **Open app** → Collect offline earnings (gold, food, hatched eggs) — 15 seconds of dopamine
2. **Check creatures** → Feed, play with, or train 2-3 creatures — 1-2 minutes
3. **Battle** → Send team on auto-battle expedition — 1-2 minutes (watch or skip)
4. **Manage habitat** → Place new decorations or unlock biome — 1-2 minutes
5. **Social** → Visit a friend, send gift, check co-op boss progress — 1 minute
6. **Close app** → Creatures continue foraging, eggs incubate, habitat produces

---

## 4. Progression Systems Spec

### 4.1 Creature Collection & Evolution

| System | Details |
|--------|---------|
| **Total Creatures** | 150 at launch (expandable to 300+ via updates) |
| **Rarity Tiers** | Common (40%), Rare (30%), Epic (20%), Legendary (8%), Mythic (2%) |
| **Elements** | 6 types: Flame, Aqua, Flora, Storm, Light, Shadow (rock-paper-scissors) |
| **Evolution** | 3 stages per creature line (Baby → Juvenile → Adult) |
| **Evolution Mechanic** | Feed + Train to milestone → evolve (NOT merge-to-evolve) |
| **Hatching** | Eggs from battles, biomes, events, and daily rewards. Incubation time: 1-8 hours |
| **Bonding Level** | Each creature has a bond meter (feed, play, battle together). Higher bond = stat bonus |
| **Personality Traits** | Each creature gets 1-2 random traits (Brave, Lazy, Curious, etc.) affecting idle behavior |

### 4.2 Team & Battle

| System | Details |
|--------|---------|
| **Team Size** | 5 creatures per team |
| **Battle** | Auto-battle with formation positioning (front/back row) |
| **Strategy** | Element matchups + synergy bonuses (e.g., 3 Aqua creatures = team heal) |
| **Difficulty** | Story campaign (500+ stages) + daily dungeons + co-op boss raids |
| **Player Input** | Choose team, set formation, trigger ultimate abilities (optional — battles auto-complete) |

### 4.3 Habitat & Decoration

| System | Details |
|--------|---------|
| **Biomes** | 6 themed biomes (Forest, Ocean, Volcano, Sky, Crystal Cave, Shadow Realm) |
| **Unlocking** | Campaign progress unlocks new biomes |
| **Decoration** | 200+ decorative items (trees, ponds, houses, paths, lighting) |
| **Function** | Decorations provide passive bonuses (gold/h, egg find rate, creature happiness) |
| **Creature Placement** | Creatures roam the habitat; assigned biome affects mood & idle output |
| **Visiting** | Friends can visit your habitat, leave gifts, and "pet" your creatures |

### 4.4 Prestige / Ascension

| System | Details |
|--------|---------|
| **Name** | "Migration" — your creatures discover a new world |
| **What Resets** | Campaign progress, gold, basic items |
| **What Persists** | Creature collection, bond levels, habitat decorations, premium currency, ascension multiplier |
| **Multiplier** | 1.5x base earnings per migration (compounding) |
| **Target Time-to-First** | Day 5-7 for active players |
| **Incentive** | Each migration unlocks 1 new biome theme + exclusive creature egg |

---

## 5. Economy Spec

| Resource | Generation Rate | Primary Sink | Scarcity Target |
|----------|----------------|-------------|-----------------|
| **Gold** (soft) | Habitat idle + battle drops | Creature leveling, evolution items, basic decorations | Moderate — always useful but earnable |
| **Crystals** (premium) | Daily quests, achievements, battle pass, IAP | Premium eggs, speed-ups, rare decorations, cosmetics | Tight — 50-80/day free; meaningful purchases cost 200-1000 |
| **Food** | Farming plots in habitat (idle) + rewards | Feeding creatures (raises bond + XP) | Moderate — constrains training speed |
| **Essence** (evolution mat) | Boss raids, co-op, campaign milestones | Evolution (Baby→Juvenile→Adult) | Tight — bottleneck by design |
| **Star Dust** (prestige) | Migration reward only | Permanent stat boosts, exclusive creatures | Very tight — migration-gated |
| **Friendship Tokens** | Visiting friends, gifting, co-op | Social shop (exclusive decorations, creature skins) | Moderate — daily social cap |

### Economy Philosophy
- **Generous early, tightening mid-game** — first 3 days feel abundant; day 7+ introduces meaningful scarcity
- **Multiple currencies prevent inflation** — gold is easy; crystals are precious; essence is strategic
- **Social currency can't be bought** — friendship tokens from play only; rewards social engagement

---

## 6. Offline Progression Design

| Parameter | Value |
|-----------|-------|
| **Max Offline Duration** | 12 hours (upgradable to 16h via battle pass) |
| **Offline Earnings Rate** | 70% of active rate (habitat gold + food) |
| **Egg Incubation** | Continues in real-time offline |
| **Creature Training** | Continues offline if queued before exit |
| **Collection Trigger** | Push notification at 4h and 8h: "Your creatures found something!" |
| **Catch-Up Mechanic** | Rewarded video ad to double offline earnings (shown once per collection) |
| **Overflow Protection** | Earnings cap at 12h; notification warns at 10h to avoid waste |

---

## 7. Number Scaling Strategy

| Range | Format | Example |
|-------|--------|---------|
| 0 - 999 | Raw | 847 |
| 1,000 - 999,999 | K | 42.5K |
| 1M - 999M | M | 128M |
| 1B+ | B, T, aa, ab... | 3.2T |

- **Scaling curve:** Polynomial early (levels 1-50), exponential mid-game (50-200), soft-cap late game
- **Prestige resets** prevent number fatigue; each migration feels "fresh" at manageable numbers
- **Creature stats** scale linearly; habitat output scales exponentially — creates natural prestige pressure

---

## 8. Monetization Plan

### Ad Monetization

| Ad Type | Trigger | Reward | Cap |
|---------|---------|--------|-----|
| **Rewarded video** | Double offline earnings | 2x gold/food | 1 per collection (5-7/day) |
| **Rewarded video** | Speed up egg hatch | -50% remaining time | 3/day |
| **Rewarded video** | Extra battle reward | Bonus loot roll | 2/day |
| **Rewarded video** | Daily bonus spin | Extra spin on reward wheel | 1/day |
| **Interstitial** | NONE | — | — |
| **Banner** | NONE | — | — |

**Philosophy:** Rewarded-only. No interstitials, no banners. Players who watch rewarded ads are **4x more likely to make IAP** — ads are a funnel, not a revenue source.

### IAP Structure

| Offer | Price | Contents | Target |
|-------|-------|----------|--------|
| **Starter Egg Pack** | $0.99 | 1 Rare egg + 500 crystals + 3-day VIP | New players (Day 1-3 trigger) |
| **Creature Pass** (battle pass) | $4.99/month | Daily crystals, exclusive creature skin, bonus offline hours, premium egg weekly | Minnows (main converter) |
| **Habitat Expansion** | $2.99-9.99 | New biome theme + 10 exclusive decorations | Decorators |
| **Crystal Packs** | $4.99-49.99 | Crystals (scaled value) | Mid-spenders |
| **Legendary Egg Bundle** | $9.99-19.99 | Guaranteed Legendary egg + evolution mats | Collectors |
| **Season Pass** | $9.99/season | 30-day premium rewards track + exclusive Mythic creature | Core players |
| **Ad Removal** | $4.99 (permanent) | Remove all rewarded ad prompts; auto-collect bonuses | Convenience buyers |
| **Monthly Subscription** | $9.99/mo | Daily crystals + 16h offline + exclusive habitat items | Whales/loyal players |

**Triggered Offers:**
- First evolution wall → Essence pack ($2.99)
- First team wipe in battle → Power boost pack ($1.99)
- 7-day streak → Loyalty reward bundle ($4.99)
- Friend visits your habitat → Social decoration pack ($2.99)

### Revenue Split Target
- **Ads:** 30-40% of revenue (rewarded video heavy)
- **IAP:** 60-70% of revenue (battle pass + creature pass as core)

---

## 9. Retention Toolkit

### Daily Hooks
| Mechanic | Reward | Engagement |
|----------|--------|------------|
| Daily creature care (feed all) | Bonus gold + bond XP | 2-3 min |
| Daily reward wheel | Random resources/eggs | 30 sec |
| Daily quests (3 tasks) | Crystals + creature XP | 5-8 min |
| Daily dungeon run | Essence + rare items | 3-5 min |

### Weekly Hooks
| Mechanic | Reward | Engagement |
|----------|--------|------------|
| Weekly co-op boss (guild) | Legendary essence + guild points | 10-15 min total |
| Weekly creature showcase (social) | Vote on cutest creature; winner gets reward | 2 min |
| Habitat design contest | Community votes; top 3 get exclusive decor | Ongoing |

### Monthly Hooks
| Mechanic | Reward | Engagement |
|----------|--------|------------|
| Seasonal event (themed) | Limited creature, exclusive biome decor | 2-4 week event |
| New creature batch release | 5-10 new creatures to discover | Ongoing collection drive |
| Migration milestone rewards | Bonus Star Dust for reaching migration count | Long-term goal |

### Anti-Churn Mechanics
- **Creature "miss you" notifications** — "Blobby hasn't been fed in 2 days. He misses you!" (emotional re-engagement)
- **Comeback bonus** — 3-day absence = 3x offline earnings cap + free Rare egg
- **Guild social pressure** — light: "Your guild beat the boss without you! See the rewards you missed"
- **Seasonal FOMO** — limited creatures only available during events

---

## 10. Content Pipeline

### How to Generate 500+ Stages with Minimal Manual Work

| Content Type | Generation Method | Manual Effort |
|-------------|-------------------|---------------|
| **Campaign stages** | Parametric enemy scaling (HP/ATK curves) + random element assignment | Design 20 boss templates; procedural scaling generates 500+ stages |
| **Creatures** | Base model + palette swap + element variant + personality trait randomization | Design 50 base creature models → 150 variants at launch |
| **Decorations** | Themed asset packs per biome (10-20 items each) | 6 biomes × 20 items = 120 at launch; add 10/month |
| **Events** | Template system: "Collect X event currency → exchange for limited creature/decor" | 1 template, reskinned monthly with new theme |
| **Co-op bosses** | Scaled-up campaign bosses with 1 unique mechanic each | Design 12 bosses (1/month for first year) |
| **Daily dungeons** | Randomized element-of-the-day + procedural floor layout | Seed-based generation; zero manual content |

### Post-Launch Content Cadence
- **Every 2 weeks:** New creature batch (3-5 creatures)
- **Every month:** New co-op boss + seasonal mini-event
- **Every quarter:** Major update (new biome, new mechanic, 10+ creatures)
- **Every 6 months:** New evolution tier or creature type

---

## 11. LiveOps Calendar (First 3 Months)

### Month 1: "Grand Hatching"
| Week | Event | Monetization |
|------|-------|-------------|
| 1 | Launch celebration — free Rare egg daily | Starter pack push |
| 2 | "First Migration Festival" — bonus migration rewards | Migration crystal pack |
| 3 | "Flora Bloom" event — collect flowers for limited Flora creature | Event bundle ($4.99) |
| 4 | Co-op boss: Giant Treant — guild rewards | Season pass launch |

### Month 2: "Ocean Discovery"
| Week | Event | Monetization |
|------|-------|-------------|
| 5 | Ocean biome spotlight — 2x Aqua creature egg drops | Ocean decoration pack |
| 6 | "Best Habitat" contest — community votes | Habitat expansion IAP |
| 7 | "Buddy Week" — 2x friendship tokens from visits | Social gifting bundles |
| 8 | Co-op boss: Kraken — guild raid event | Legendary egg bundle |

### Month 3: "Ember Festival"
| Week | Event | Monetization |
|------|-------|-------------|
| 9 | Volcano biome spotlight — limited Flame Mythic creature | Season pass renewal |
| 10 | "Creature Evolution Race" — first to evolve X creatures wins | Evolution mat packs |
| 11 | Cross-server guild tournament (co-op, NOT PvP) | Crystal packs |
| 12 | Anniversary/milestone celebration — free Legendary egg | Anniversary bundle ($9.99) |

---

## 12. Art & Audio Direction

### Visual Style
- **Reference:** Slime Rancher meets Neko Atsume meets Legend of Mushroom
- **Characters:** Rounded, squishy, expressive creatures with big eyes and bouncy animations
- **Color Palette:** Warm pastels (primary) with saturated accent colors per element
- **UI:** Clean, rounded corners, one-hand friendly, large touch targets
- **Habitat:** Isometric or 2.5D diorama view; creatures wander and interact
- **Gender-Neutral Design:** No hyper-masculine or hyper-feminine defaults; player avatar is customizable

### Audio
- **Music:** Lo-fi chill / acoustic guitar (habitat); upbeat orchestral (battles); gentle piano (menus)
- **SFX:** Satisfying "pop" on egg hatch; creature vocalizations (chirps, purrs, squeaks); coin cascade on collection
- **Feedback Sounds:** Every action should sound rewarding — merge, evolve, level up all have distinct satisfying audio cues
- **No Silence:** Ambient habitat sounds (wind, water, creature sounds) keep the world alive

---

## 13. Technical Requirements

| Component | Recommendation |
|-----------|---------------|
| **Engine** | Unity (2D/3D hybrid) or Cocos Creator |
| **Big Number Library** | Custom or break_infinity.js port |
| **Save System** | Cloud save (Google Play Games / Apple Game Center) + local backup |
| **Offline Calculation** | Server-validated offline earnings on reconnect; anti-cheat timestamp check |
| **Ad SDK** | ironSource / AppLovin MAX (mediation) — rewarded video only |
| **Analytics SDK** | GameAnalytics + Firebase; custom events for creature collection, evolution, migration |
| **Push Notifications** | Firebase Cloud Messaging; creature-themed messages |
| **Social** | Firebase Realtime DB or PlayFab for friend visits, gifting, guild |
| **Asset Pipeline** | Spine 2D for creature animations (scalable, lightweight) |
| **Min Spec** | iPhone 8 / Android 8.0, 2GB RAM |

---

## 14. KPI Targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| **Gender Split** | 45-55% female | Core design goal — validates mass-market appeal |
| **D1 Retention** | 45%+ | Cute creatures + generous first session = strong first impression |
| **D7 Retention** | 22%+ | Collection + habitat building + social hooks |
| **D30 Retention** | 12%+ | Migration system + seasonal events + guild engagement |
| **ARPDAU** | $0.20 | Hybrid model; higher female IAP conversion offsets lower whale % |
| **LTV (D180)** | $8.00+ | Battle pass + creature pass recurring revenue |
| **CPI (Android)** | < $1.50 | Cute creature theme = strong creative performance; broad targeting |
| **CPI (iOS)** | < $3.00 | Below idle RPG average of $3.19 due to mass appeal |
| **CPI Breakeven** | D60 | Conservative target for hybrid monetization |
| **Sessions/Day** | 5-7 | Idle collection + creature care + social visits |
| **Avg Session** | 5-8 min | Enough depth per session; respects player time |
| **DAU/MAU** | 20%+ | Daily creature care + guild obligations drive stickiness |
| **Ad Views/DAU** | 4-6 | Rewarded-only; high opt-in rate due to generous rewards |

---

## 15. MVP Scope (Soft Launch)

### Must-Have (4-5 month dev for team of 8-12)

| Feature | Priority |
|---------|----------|
| 50 creatures (3 elements, 3 evolution stages each) | P0 |
| Egg hatching + incubation system | P0 |
| Creature feeding, bonding, training | P0 |
| Auto-battle with formation (100 campaign stages) | P0 |
| 2 habitat biomes with basic decoration (30 items) | P0 |
| Offline earnings (gold, food, egg incubation) | P0 |
| Migration/prestige system | P0 |
| Daily quests + login rewards | P0 |
| Rewarded video ads (4 placements) | P0 |
| Starter pack + creature pass IAP | P0 |
| Cloud save | P0 |
| Push notifications (creature care reminders) | P1 |
| Friend visits + gifting | P1 |
| Basic guild + co-op boss (1 boss) | P1 |

### Post-Soft-Launch (add based on data)
- Full 6-element system + 150 creatures
- 6 biomes + 200 decorations
- Season pass + seasonal events
- Guild tournaments
- Habitat design contests
- Creature skins/cosmetics
- PvP arena (optional, ranked)

---

## 16. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| **"Too cute" perception alienates male players** | Medium | High | Include strategic depth (team synergies, optimization). Marketing shows gameplay depth alongside cute art. Capybara Go! and Egg Inc. prove cute + depth works for men. |
| **Collection fatigue — 150 creatures feels overwhelming** | Medium | Medium | Gradual unlock curve; "Creaturepedia" with completion rewards. Guide players toward 1 team first. |
| **Habitat decoration lacks depth vs dedicated decor games** | Medium | Medium | Focus on functional decorations (stat bonuses) not just cosmetic. Quality over quantity. |
| **Co-op boss difficulty balancing** | High | Medium | Scale boss HP to guild size. Generous rewards even for partial completion. |
| **Low male retention if no competitive outlet** | Medium | High | Add optional weekly leaderboard (creature power ranking). Frame as "showcase" not "fight." Include guild vs guild co-op challenges. |
| **Revenue cannibalization between creature pass and season pass** | Low | Medium | Different value propositions: creature pass = daily convenience; season pass = exclusive content. Test pricing in soft launch. |

---

## 17. Comparable Titles — What to Take from Each

| Game | Take This | Avoid This |
|------|-----------|------------|
| **Egg Inc.** | Prestige loop satisfaction; cute + numbers = universal appeal; generous offline earnings | Lack of creature variety; no social features; thin visual variety |
| **Legend of Mushroom** | Chibi art style that appeals to both genders; gear depth; marriage/social systems | Aggressive gacha; P2W perception; generic fantasy theme |
| **Pokemon GO** | Creature collection completionism; creature personality/bonding; element matchups | Requires real-world movement; battery drain; server dependency |
| **Merge Dragons** | Habitat decoration as core loop; merge satisfaction; discovery of new creatures | Merge mechanic can feel repetitive; aggressive energy timers |
| **Neko Atsume** | Zero-pressure creature visiting; emotional attachment to creatures; cozy vibe | No depth; no progression; no monetization beyond cosmetics |
| **AFK Journey** | Production quality; open world feel; guild systems; seasonal content cadence | Too combat-focused; dark fantasy alienates women; high dev cost |
| **Gossip Harbor** | Narrative hooks drive female engagement; $677M proves mass-market idle works | Story creation is expensive; drama theme limits audience to merge fans |

---

## Key Design Philosophy

> **"Cute is not a weakness — it's a superpower."**
>
> The most underserved segment in idle RPGs is the 48% of gamers who happen to be women and the growing number of men who prefer non-aggressive gaming. By building an idle RPG around creatures that players *care about* rather than heroes they *command*, we tap into nurturing and collection motivations that are the most gender-balanced drivers in gaming.
>
> Every design decision should pass the test: *"Would both my mom and my brother want to show this creature to someone?"* If yes, ship it.

---

## Sources

- [Udonis: 2026 Gamers Report](https://www.blog.udonis.co/mobile-marketing/mobile-games/modern-mobile-gamer)
- [MAF: Mobile Gamers Demographics](https://maf.ad/en/blog/mobile-gamers-demographics/)
- [Variety: Women 52% of US Gamers](https://variety.com/2025/gaming/news/women-older-adults-us-gamers-study-1236538193/)
- [adjoe: Idle Games Demographics](https://adjoe.io/glossary/idle-games-mobile/)
- [Tenjin: Ad Monetization Benchmarks 2025](https://tenjin.com/blog/ad-mon-gaming-2025/)
- [MegaDigital: CPI Mobile Game 2026](https://megadigital.ai/en/blog/cpi-mobile-game-guide/)
- [GameAnalytics: 2025 Mobile Gaming Benchmarks](https://www.gameanalytics.com/reports/2025-mobile-gaming-benchmarks)
- [Geena Davis Institute: Inclusive Game Design Playbook](https://geenadavisinstitute.org/spotlight/inclusive-game-design-playbook/)
- [Plarium: 39 Stats on Women Gamers](https://plarium.com/en/blog/female-gamers/)

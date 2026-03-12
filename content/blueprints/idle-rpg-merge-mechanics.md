# Design Blueprint: Idle RPG with Merge Mechanics

*Generated: 2026-03-12 | Mode: Design Blueprint*

---

## 1. Game Concept

**Elevator Pitch:** A mobile idle RPG where players merge heroes, equipment, and runes on a tactical board to forge powerful teams that battle automatically through an endless fantasy campaign. Combine the satisfying drag-and-drop simplicity of merge games with the deep progression and collection systems of idle RPGs — creating a hybrid that's easy to pick up but impossible to put down.

**Working Title:** *Merge Legends: Idle RPG*

**USP:** Unlike traditional idle RPGs that rely solely on gacha pulls, every hero and item is earned through merging — giving players agency and a sense of craftsmanship over their roster. The merge board serves as both the core interaction and the primary resource generator, replacing passive tapping with an active-yet-relaxed gameplay loop.

---

## 2. Target Audience

| Attribute | Details |
|-----------|---------|
| **Age Range** | 25-45 (primary), 18-55 (secondary) |
| **Gender** | Broad appeal, slight male skew (55/45) |
| **Player Archetype** | Collectors, Optimizers, Casual Strategists |
| **Session Profile** | 3-8 min sessions, 4-6 times/day |
| **Platforms** | iOS + Android (simultaneous launch) |
| **Geo Focus** | US, Western Europe (primary); South Korea, SEA (secondary) |

**Comparable Game Players:**
- AFK Arena / AFK Journey players who want more interactivity
- Merge Dragons / Merge Mansion players who want deeper progression
- Idle Heroes players looking for a fresher hero fusion system
- Legend of Mushroom players who enjoy cute RPG idle loops

**Primary Motivations:**
- **Collection** — building a complete hero roster through merging
- **Optimization** — finding the best merge paths and team compositions
- **Power Fantasy** — watching numbers scale as merged heroes dominate

---

## 3. Core Loop Diagram

```
MERGE BOARD (Active)                    BATTLE (Idle/Auto)
     |                                       |
  Spawn hero/item fragments          Auto-combat stages
     |                                       |
  Drag & merge (2-match or 3-match)    Earn Gold + XP + Fragments
     |                                       |
  Create higher-tier heroes/gear        Drop merge fragments
     |                                       |
  Equip hero to battle team             Hit wall / boss gate
     |                                       |
  +---------<--- REWARD LOOP --->-----------+
     |                                       |
  Unlock new merge chains              Progress to next chapter
     |                                       |
  PRESTIGE (Ascension) --- reset merge board, keep heroes, gain multiplier
```

**Session Flow:**
1. **Open app** -> Collect idle/offline rewards (gold, fragments, merge energy)
2. **Merge phase** (1-3 min) -> Drag-and-drop fragments on the merge board to create heroes, gear, runes
3. **Team management** (30 sec) -> Slot merged heroes into team, equip merged gear
4. **Watch battles progress** (1-2 min) -> Auto-combat pushes through stages
5. **Hit progression gate** -> Need stronger heroes -> return to merge board
6. **Close app** -> Idle earnings continue; merge board slowly generates fragments

**Why this works:** The merge board provides active, tactile engagement (the #1 reason merge games retain) while idle battles provide passive progression (the #1 reason idle RPGs retain). Players always have something to do but are never punished for leaving.

---

## 4. Progression Systems Spec

### 4.1 Hero Progression

| System | Description | Depth |
|--------|-------------|-------|
| **Hero Merging** | Merge 3 same-tier hero fragments -> next tier hero (Tier 1-10) | 10 tiers |
| **Star Ascension** | Use duplicate heroes to ascend (1-star to 6-star) | 6 levels per hero |
| **Equipment Merging** | Merge gear fragments -> equip to heroes (weapon, armor, accessory, rune) | 4 slots x 10 tiers |
| **Skill Unlock** | Each hero tier unlocks a new skill (passive or active) | 4 skills per hero |
| **Faction Synergy** | Teams with 2/4/6 same-faction heroes get aura bonuses | 5 factions |

### 4.2 Account Progression

| System | Description |
|--------|-------------|
| **Player Level** | XP from battles, unlocks features gradually |
| **Chapter Progress** | Linear campaign with 50 chapters x 20 stages = 1,000 stages |
| **Tower of Trials** | Endless vertical climb, resets weekly, competitive leaderboard |
| **Collection Book** | % completion bonuses for unlocking all heroes/items in a faction |
| **Prestige (Ascension)** | Reset merge board tier + chapter progress; keep heroes; gain permanent multipliers |

### 4.3 Pacing Targets

| Milestone | F2P Target | Paying Player Target |
|-----------|-----------|---------------------|
| First Tier 5 hero | Day 1-2 | Day 1 |
| First team of 5 heroes | Day 2-3 | Day 1-2 |
| Chapter 10 (feature unlock plateau) | Day 5-7 | Day 3-5 |
| First Prestige/Ascension | Day 7-10 | Day 4-6 |
| First Tier 10 hero | Day 30-45 | Day 14-21 |
| Full 6-star team | Day 90-120 | Day 30-45 |

---

## 5. Economy Spec

| Resource | Type | Generation Rate | Primary Sink | Scarcity Target |
|----------|------|----------------|-------------|-----------------|
| **Gold** | Soft currency | Idle battles (1000/min scaling), quests | Hero leveling, gear enhancement | Low scarcity (generous) |
| **Merge Energy** | Session currency | Regenerates 1/min, cap 100 | Each merge costs 1-3 energy | Medium scarcity (paces active play) |
| **Hero Fragments** | Merge material | Merge board spawns, battle drops, quests | Merging heroes | Medium-high scarcity (core progression gate) |
| **Gems** | Premium currency | Achievements, events, ads, IAP | Premium summons, energy refills, cosmetics | High scarcity (monetization driver) |
| **Ascension Stones** | Prestige currency | Earned on prestige (based on progress) | Permanent multipliers, unlock merge chains | Very high scarcity (long-term chase) |
| **Rune Dust** | Enhancement material | Salvaging merged items, events | Rune upgrades, skill enhancements | High scarcity (end-game gate) |
| **Event Tokens** | Temporary currency | Event activities only | Event shop exclusives | Time-limited |

**Economy Philosophy:**
- Gold is abundant — players should always feel they can level *something*
- Merge Energy is the session pacer — prevents binge-merging but refills fast enough for 5-6 daily sessions
- Hero Fragments are the true bottleneck — creates desire to return frequently and drives ad/IAP conversion
- Gems are premium but earnable — F2P players get ~50-80/day through gameplay; paying players can accelerate

---

## 6. Prestige / Reset Design

| Aspect | Design |
|--------|--------|
| **What resets** | Merge board tier, chapter progress, gold, merge energy cap |
| **What persists** | All heroes (and their levels/stars), gear, collection progress, account level |
| **What is gained** | Ascension Stones, permanent merge speed multiplier (+10-25% per ascension), new merge chain unlocks, higher fragment spawn rates |
| **Multiplier formula** | `base_power * (1 + 0.15 * ascension_count)` — diminishing but always meaningful |
| **Target time-to-first-prestige** | Day 7-10 for F2P |
| **Prestige depth** | Effectively infinite, but meaningful upgrades plateau around Ascension 20-30 |

**Why prestige works here:** Resetting the merge board feels natural — "start fresh with better tools." Players keep their hero collection (the emotional investment) while getting a faster, more rewarding merge experience. This avoids the painful "lose everything" feeling that kills retention in some prestige systems.

---

## 7. Offline Progression Design

| Aspect | Design |
|--------|--------|
| **Idle battle earnings** | Heroes continue fighting stages while offline |
| **Earnings formula** | `offline_rate = online_rate * 0.6` (60% efficiency to incentivize active play) |
| **Time cap** | 8 hours of accumulated idle rewards (encourages 2-3x daily check-ins) |
| **Merge board offline** | Board slowly spawns fragments while offline (1 fragment per 10 min, up to board capacity) |
| **Collection triggers** | Push notification at 2h, 4h, 8h: "Your merge board is filling up!" |
| **Catch-up mechanic** | "Idle Boost" — watch a rewarded ad to get 2x offline earnings on collection |

---

## 8. Number Scaling Strategy

| Range | Format | Example | Player Phase |
|-------|--------|---------|-------------|
| 0 - 999 | Raw number | 847 | Tutorial |
| 1K - 999K | K suffix | 234K | Early game |
| 1M - 999M | M suffix | 56.7M | Mid game |
| 1B - 999B | B suffix | 12.3B | Late game |
| 1T+ | Letter notation | 4.5aa, 12.3ab | End game / post-prestige |

**Growth model:** Polynomial with exponential spikes at prestige. Damage and gold scale at roughly `base * level^1.5 * prestige_mult`. This keeps numbers growing noticeably but avoids the "meaningless big numbers" problem of pure exponential scaling.

**Why polynomial over exponential:** Pure exponential (common in idle clickers) makes early upgrades feel irrelevant too quickly. Polynomial growth ensures each level-up provides a felt increase relative to the current power level, maintaining satisfaction longer.

---

## 9. Monetization Plan

### Ad Placements

| Placement | Trigger | Reward | Daily Cap |
|-----------|---------|--------|-----------|
| **Idle Boost** | Collecting offline rewards | 2x offline earnings | 3/day |
| **Merge Speed-Up** | During active merge session | 2x merge speed for 5 min | 5/day |
| **Extra Fragment Spawn** | Merge board prompt | Spawn 3 bonus fragments | 5/day |
| **Battle Skip** | Boss gate / stuck on stage | Skip 5 stages | 3/day |
| **Daily Gem Bonus** | Daily login screen | +30 bonus gems | 1/day |
| **Interstitial** | Every 10th stage clear | N/A (revenue only) | 3/day max |

**Estimated rewarded ad views/DAU:** 4-6 (within healthy range)

### IAP Catalog

| Offer | Price | Contents | Target |
|-------|-------|----------|--------|
| **Remove Ads** | $4.99 | Remove interstitials permanently | Light spenders |
| **Starter Pack** | $2.99 | 500 gems + Tier 5 hero + 50 merge energy (one-time, first 48h) | New players |
| **Merge Pass (Battle Pass)** | $9.99/month | Daily gems, exclusive hero skins, extra merge energy, premium quest track | Core spenders |
| **Gem Packs** | $0.99-$99.99 | 100-12,000 gems (scaling value) | All spenders |
| **Weekly Value Pack** | $4.99 | 300 gems + 500 hero fragments + 20 rune dust | Regular players |
| **Limited Hero Pack** | $14.99-$49.99 | Exclusive event hero + gems + resources | Whales / collectors |
| **Permanent 2x Idle** | $9.99 | Permanently doubles all idle earnings | One-time, mid-game offer |

### Offer System (Triggered)

| Trigger | Offer | Psychology |
|---------|-------|-----------|
| First boss defeat | Starter Pack popup | Riding the high |
| First death/wall | "Power Pack" ($4.99 for gems + fragments) | Frustration relief |
| Day 3 login | Merge Pass introduction | Habit forming |
| First prestige | "Ascension Pack" ($9.99 for Ascension Stones + gems) | Investment in new cycle |
| After 7-day streak | "Loyal Player Pack" ($2.99 premium value) | Reward commitment |

**Revenue split target:** 40% ads / 60% IAP (hybrid model, shifting toward IAP as player base matures)

---

## 10. Retention Toolkit

### Daily Hooks

| Mechanic | Description | Reward |
|----------|-------------|--------|
| **Daily Login Calendar** | 7-day cycle, escalating rewards, day 7 = rare hero fragment | Gems, fragments, energy |
| **Daily Quests (5)** | "Merge 20 items," "Clear 10 stages," "Ascend 1 hero" | Gold, gems, fragments |
| **Daily Free Summon** | 1 free hero fragment pull every 24h | Random hero fragment |
| **Merge Board Daily Challenge** | Special board layout, merge target, timed | Exclusive rewards |

### Weekly Hooks

| Mechanic | Description |
|----------|-------------|
| **Tower of Trials Reset** | Competitive leaderboard resets weekly, rank rewards |
| **Weekly Boss** | Guild-wide boss fight, collective damage = rewards |
| **Weekly Merge Event** | Bonus rewards for merging specific hero types |

### Monthly / Long-Term

| Mechanic | Description |
|----------|-------------|
| **Monthly Login Calendar** | 28-day escalating rewards, day 28 = guaranteed rare hero |
| **Collection Milestones** | Permanent stat bonuses at 25%, 50%, 75%, 100% collection |
| **Season Pass** | 30-day premium track with exclusive cosmetics and heroes |
| **Merge Pass Rankings** | Seasonal leaderboard for total merges, prestige count |

### Churn Prevention

| Risk Point | Mitigation |
|------------|-----------|
| Day 1 overwhelm | Gradual feature unlock (merge board only for first 10 stages) |
| Day 3-5 wall | Generous "comeback" rewards if session gap > 24h |
| Day 14 plateau | Unlock Tower of Trials + Guild system for new goals |
| Day 30+ content drought | LiveOps events, new hero releases, seasonal themes |

---

## 11. Content Pipeline

| Content Type | Generation Method | Volume | Manual Effort |
|-------------|-------------------|--------|--------------|
| **Battle Stages** | Parametric scaling (enemy HP/ATK = `base * stage^1.4`) | 1,000+ stages | Design first 50, auto-generate rest |
| **Heroes** | 5 factions x 8 base heroes = 40 heroes, each with 10 merge tiers | 400 hero variants | Design 40 base kits, tiers are stat multipliers |
| **Equipment** | 4 types x 10 tiers = 40 items per set, 5 faction sets | 200 gear items | Design 20 base items, tier = sprite recolor + stats |
| **Merge Chains** | Each hero/item type = 1 merge chain | 60+ chains | Define tier art + stat curve |
| **Boss Encounters** | Every 20 stages, boss = scaled elite with 1 special mechanic | 50+ bosses | Design 10 mechanic archetypes, rotate |
| **Events** | Template-based: "Merge X items," "Clear Y stages," "Collect Z" | Infinite (parameterized) | Design 5 templates, rotate with different themes |

**Key insight:** Merge chains are inherently content-efficient. Each base hero/item generates 10 tiers of content automatically. A roster of 40 heroes produces 400 collectible entities with minimal additional art/design per tier.

---

## 12. LiveOps Calendar — First 3 Months

### Month 1: Launch

| Week | Event | Theme | Monetization |
|------|-------|-------|-------------|
| W1 | **Launch Celebration** | 2x merge speed, daily free summons | Starter packs, gem sale |
| W2 | **Merge Marathon** | Merge milestones for bonus rewards | Merge energy packs |
| W3 | **Faction Focus: Fire** | Boosted Fire hero fragment drops | Fire hero pack ($14.99) |
| W4 | **Tower Sprint** | First Tower of Trials competitive season | Battle Pass launch |

### Month 2: Expansion

| Week | Event | Theme | Monetization |
|------|-------|-------|-------------|
| W5 | **New Hero Release: Legendary** | Limited merge chain for exclusive hero | Limited hero pack ($24.99) |
| W6 | **Guild Boss Rush** | Co-op boss with guild rewards | Guild gift packs |
| W7 | **Merge Board Frenzy** | Special 5x5 board (expanded from 4x4) | Board expansion IAP |
| W8 | **Rune Forge Event** | Boosted rune drops + new rune merge chain | Rune pack ($9.99) |

### Month 3: Retention

| Week | Event | Theme | Monetization |
|------|-------|-------|-------------|
| W9 | **Season 1 Finale** | Leaderboard final push, double XP | Season pass final sale |
| W10 | **Crossover Event** (if partnership available) | Themed heroes/skins | Premium crossover pack |
| W11 | **Prestige Challenge** | Bonus ascension rewards for prestige during event | Ascension pack ($9.99) |
| W12 | **Season 2 Launch** | New Battle Pass, new hero faction introduced | New season pass ($9.99) |

---

## 13. Art & Audio Direction

### Visual Style
- **Art style:** 2D stylized / chibi with vibrant colors (similar to Legend of Mushroom / AFK Arena)
- **Why:** Chibi/stylized is cheaper to produce at scale (40+ heroes), appeals broadly, and merge animations look satisfying with exaggerated VFX
- **Color palette:** Faction-coded (Fire=red/orange, Water=blue, Nature=green, Light=gold, Dark=purple)
- **UI principles:** One-hand play, large tap targets, merge board fills 60% of screen, minimal text

### Audio Design
| Element | Style |
|---------|-------|
| **Merge SFX** | Ascending chime + sparkle (pitch increases with tier) — critical for satisfaction |
| **Battle BGM** | Upbeat orchestral loop, faction-themed variations |
| **Idle BGM** | Calm ambient loop with gentle melody |
| **Prestige fanfare** | Epic brass + choir swell (marks achievement) |
| **Reward collection** | Coin cascade + level-up jingle |
| **UI sounds** | Soft clicks, minimal — never intrusive |

**Key principle:** Merge SFX is the most important audio element. Each tier merge should sound progressively more satisfying (deeper resonance, more harmonics). This is the "popping bubble wrap" factor that drives merge game retention.

---

## 14. Technical Requirements

| Component | Recommendation | Notes |
|-----------|---------------|-------|
| **Engine** | Unity 2022+ or Godot 4.x | Unity preferred for mobile ecosystem maturity |
| **Save System** | Cloud save (Firebase/PlayFab) + local backup | Critical for cross-device play |
| **Offline Calculation** | Server-validated timestamp-based offline earnings | Prevent time-cheat exploits |
| **Big Number Library** | BreakInfinity.cs (Unity) or custom BigNumber class | Handles numbers beyond double precision |
| **Ad SDK** | AppLovin MAX or ironSource LevelPlay (mediation) | Maximize eCPM across networks |
| **Analytics SDK** | GameAnalytics (free) + Firebase Events | Track retention, funnel, economy health |
| **Attribution** | Adjust or AppsFlyer | ROAS tracking for UA campaigns |
| **Merge Board** | Custom grid system with drag-and-drop physics | 4x4 default, expandable to 5x5, 6x6 |
| **Backend** | PlayFab or custom (Node.js + Redis) | Leaderboards, events, guild data |
| **Minimum Spec** | iOS 14+ / Android 8+ / 2GB RAM | Broad device compatibility |

---

## 15. KPI Targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| **D1 Retention** | 45%+ | Merge mechanic instant gratification should drive high D1 |
| **D7 Retention** | 22%+ | First prestige + guild unlock at D7 should sustain |
| **D30 Retention** | 10%+ | Battle Pass + collection depth for long-term |
| **ARPDAU** | $0.20-$0.35 | Hybrid model (ads + IAP), higher than pure idle |
| **Sessions/Day** | 4-6 | Merge energy regen + offline collection drive return visits |
| **Avg Session Length** | 4-6 min | Merge board interaction + battle check |
| **LTV (D180)** | $4.00-$8.00 | Competitive for UA at CPI $1.50-$3.00 |
| **CPI Breakeven** | D60-D90 ROAS | Standard for hybrid idle games |
| **IAP Conversion** | 4-6% | Higher than pure idle due to merge pass + starter pack |
| **Rewarded Ad Views/DAU** | 4-6 | Multiple natural ad placements |

---

## 16. MVP Scope (Soft Launch)

### Must Have (Soft Launch)
- [x] Merge board (4x4 grid) with drag-and-drop
- [x] 15 base heroes (3 per faction) with 5 merge tiers
- [x] Auto-battle campaign (200 stages, 10 chapters)
- [x] Basic hero equip/team management (5 hero slots)
- [x] Offline idle earnings + collection
- [x] 3 resource types (Gold, Merge Energy, Gems)
- [x] Daily login rewards
- [x] 5 daily quests
- [x] Basic IAP (starter pack, gem packs, remove ads)
- [x] Rewarded ads (3 placements)
- [x] Tutorial (guided first 10 stages)
- [x] Cloud save

### Post Soft-Launch (before global)
- [ ] Prestige/Ascension system
- [ ] Tower of Trials
- [ ] Guild system + guild boss
- [ ] Battle Pass / Merge Pass
- [ ] Equipment merge chains
- [ ] Rune system
- [ ] Collection book
- [ ] Push notifications
- [ ] Event system (template-based)

### Post Global Launch
- [ ] PvP arena (async)
- [ ] Expanded hero roster (40 heroes)
- [ ] Seasonal content
- [ ] Crossover events
- [ ] Board expansion (5x5, 6x6)

---

## 17. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| **Merge fatigue** — players tire of merging as primary interaction | Medium | High | Add variety: merge challenges, board puzzles, timed events. Unlock auto-merge at higher levels. |
| **Pacing too fast** — players hit content wall before retention hooks activate | Medium | High | Gate features behind player level. Ensure prestige isn't reachable before Day 7. Tune fragment drop rates conservatively at soft launch. |
| **Economy inflation** — too many resources devalue progression | Medium | Medium | Implement strong sinks (ascension costs, rune upgrades). Monitor with analytics dashboards. A/B test economy tuning at soft launch. |
| **Genre confusion** — merge players find RPG too complex; RPG players find merge too casual | High | Medium | Gradual complexity reveal. RPG systems unlock over 7 days. Merge board is always the primary screen. Market as "merge game" first, RPG second. |
| **Low IAP conversion** — merge players are historically ad-tolerant, low-spending | Medium | High | Starter pack at $2.99 (low barrier). Merge Pass provides daily value. Triggered offers at friction points. Target 40/60 ad/IAP split. |

---

## 18. Comparable Titles

| Game | What to Take | What to Avoid |
|------|-------------|---------------|
| **AFK Arena / AFK Journey** | Hero faction system, team synergy bonuses, ascension depth, idle earnings structure | Overly complex UI, too many currencies overwhelming new players |
| **Merge Dragons** | Merge board feel, drag-and-drop satisfaction, merge chain depth, land expansion as progression | Lack of RPG depth, limited long-term retention hooks, energy system too restrictive |
| **Legend of Mushroom** | Cute art style driving viral UA, simplified idle RPG loop, strong early retention | Shallow mid-game, limited social features |
| **Idle Heroes** | Deep hero fusion/gacha system, faction aura synergies, 8+ year longevity through updates | Aggressive monetization alienating F2P, outdated UI, overwhelming feature creep |
| **Merge Mansion** | Narrative meta-layer on top of merge, story-driven progression motivation | Merge-only gameplay without combat variety, narrative production costs |

---

## Sources

- [Sensor Tower: Top 5 Idle RPGs on Android Q1 2025](https://sensortower.com/blog/2025-q1-android-top-5-idle%20rpg-units-us-6040bbc2241bc16eb883a0cb)
- [Udonis: Mobile Game Revenue 2026-2029](https://www.blog.udonis.co/mobile-marketing/mobile-games/mobile-game-revenue)
- [Udonis: Merge Games Market Evolution](https://www.blog.udonis.co/mobile-marketing/mobile-games/merge-games-market)
- [PocketGamer: Evolution of Idle RPG Systems](https://www.pocketgamer.biz/game-analysis-the-evolution-of-idle-rpg-systems/)
- [Deconstructor of Fun: How Idle Heroes Made $100M](https://www.deconstructoroffun.com/blog/2018/2/27/u6ap146ff5rkmm7fj1qzuhggp395l4)
- [Mobile Free to Play: Top 7 Idle Game Mechanics](https://mobilefreetoplay.com/top-7-idle-game-mechanics/)
- [Carry1st: How Merge Mechanics Work](https://www.carry1st.com/blog/how-to-understand-the-merge-mechanics-in-merge-games)
- [AppLovin: Best Practices for Merge Games](https://www.applovin.com/blog/best-practices-ads-for-merge-games/)
- [Dataintelo: Idle Games Market Report 2033](https://dataintelo.com/report/idle-games-market)
- [Udonis: Merge Games Monetization Strategies](https://www.blog.udonis.co/mobile-marketing/mobile-games/merge-games-monetization)
- [Mobile Free to Play: How to Design a Gacha System](https://mobilefreetoplay.com/design-gacha-system/)
- [Eric Guan: Idle Game Design Principles](https://ericguan.substack.com/p/idle-game-design-principles)

/**
 * AGS Data — AI Game Studio organizational architecture
 * All 8 layers, departments, roles, workflows, roadmap, and triggers
 */
window.AGS_DATA = {
  company: {
    name: 'AI Game Studio',
    tagline: 'An AI-native game design & production operating system',
    version: '1.0'
  },

  layers: [
    {
      id: 'strategy',
      number: 1,
      name: 'Strategic Direction',
      color: '#1e40af',
      colorLight: '#3b82f6',
      icon: '\u{1F3AF}',
      purpose: 'Define goals, prioritize opportunities, align the company, decide what to build and why.',
      inputs: ['Business goals', 'Market changes', 'Internal capability constraints', 'Financial targets', 'Product portfolio needs'],
      outputs: ['Strategic priorities', 'Opportunity ranking', 'Initiative brief', 'Build/no-build recommendation', 'Focus areas'],
      kpis: ['Decision clarity', 'Strategic alignment quality', 'Opportunity hit rate', 'Portfolio quality'],
      humanCheckpoints: [
        { gate: 'Strategic Priority Approval', approver: 'Human Product Director', stage: 'Before initiatives are scoped' },
        { gate: 'Portfolio Direction Sign-off', approver: 'Human Business Reviewer', stage: 'Quarterly review' }
      ],
      departments: [
        {
          id: 'exec-director',
          name: 'AI Executive Director Office',
          description: 'Sets overall company direction and interprets business goals into actionable strategy.',
          roles: [
            {
              id: 'company-director',
              name: 'AI Company Director',
              type: 'ai',
              responsibilities: ['Receive business goals', 'Interpret company direction', 'Set target outcomes', 'Define strategic focus'],
              inputs: ['Business goals', 'Market changes'],
              outputs: ['Strategic direction document', 'Target outcomes'],
              kpis: ['Decision clarity', 'Strategic alignment quality'],
              dependencies: [],
              maturity: 'foundational'
            },
            {
              id: 'strategic-planning',
              name: 'Strategic Planning Agent',
              type: 'ai',
              responsibilities: ['Translate direction into actionable plans', 'Define milestones', 'Align initiatives with resources'],
              inputs: ['Strategic direction', 'Resource constraints'],
              outputs: ['Strategic plan', 'Milestone definitions'],
              kpis: ['Plan feasibility', 'Milestone achievement rate'],
              dependencies: ['company-director'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'opportunity-unit',
          name: 'Opportunity Prioritization Unit',
          description: 'Evaluates and ranks market opportunities against company capabilities.',
          roles: [
            {
              id: 'opportunity-scoring',
              name: 'Opportunity Scoring Agent',
              type: 'ai',
              responsibilities: ['Evaluate opportunities', 'Score by potential and feasibility', 'Rank initiatives'],
              inputs: ['Market opportunities', 'Internal capabilities'],
              outputs: ['Opportunity scores', 'Ranked initiative list'],
              kpis: ['Opportunity hit rate', 'Scoring accuracy'],
              dependencies: ['strategic-planning'],
              maturity: 'foundational'
            },
            {
              id: 'resource-fit',
              name: 'Resource Fit Agent',
              type: 'ai',
              responsibilities: ['Assess resource requirements', 'Match opportunities to capabilities', 'Flag resource gaps'],
              inputs: ['Opportunity list', 'Team capabilities', 'Budget constraints'],
              outputs: ['Resource fit analysis', 'Gap assessment'],
              kpis: ['Resource utilization accuracy', 'Gap prediction quality'],
              dependencies: ['opportunity-scoring'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'goal-alignment',
          name: 'Company Goal Alignment Unit',
          description: 'Ensures all initiatives are aligned with overarching company goals and portfolio strategy.',
          roles: [
            {
              id: 'portfolio-prioritization',
              name: 'Portfolio Prioritization Agent',
              type: 'ai',
              responsibilities: ['Prioritize across portfolio', 'Balance risk vs reward', 'Ensure strategic coherence'],
              inputs: ['Ranked opportunities', 'Portfolio status', 'Strategic plan'],
              outputs: ['Portfolio priority list', 'Build/no-build recommendations'],
              kpis: ['Portfolio quality', 'Strategic coherence score'],
              dependencies: ['opportunity-scoring', 'resource-fit'],
              maturity: 'intermediate'
            }
          ]
        }
      ]
    },
    {
      id: 'research',
      number: 2,
      name: 'Intelligence & Research',
      color: '#0d9488',
      colorLight: '#14b8a6',
      icon: '\u{1F50D}',
      purpose: 'Gather market intelligence, analyze players, study competitors, identify genre opportunities, create decision-grade insight.',
      inputs: ['App store data', 'Top grossing charts', 'Game reviews', 'Competitor feature sets', 'Player behavior patterns', 'Market reports'],
      outputs: ['Research reports', 'Competitor summaries', 'Player motivation map', 'Audience profile', 'Market opportunity analysis', 'Genre opportunity brief'],
      kpis: ['Research relevance', 'Actionability of insight', 'Quality of opportunity detection', 'Decision usefulness'],
      humanCheckpoints: [
        { gate: 'Research Insight Review', approver: 'Human Product Director', stage: 'Before insights inform design' }
      ],
      departments: [
        {
          id: 'market-research',
          name: 'Market Research Department',
          description: 'Analyzes market trends, top charts, and revenue patterns to identify opportunities.',
          roles: [
            {
              id: 'market-research-agent',
              name: 'Market Research Agent',
              type: 'ai',
              responsibilities: ['Analyze market trends', 'Track top grossing charts', 'Identify revenue patterns', 'Generate market reports'],
              inputs: ['App store data', 'Market reports', 'Revenue data'],
              outputs: ['Market trend reports', 'Revenue analysis'],
              kpis: ['Research relevance', 'Trend prediction accuracy'],
              dependencies: [],
              maturity: 'foundational'
            },
            {
              id: 'trend-detection',
              name: 'Trend Detection Agent',
              type: 'ai',
              responsibilities: ['Detect emerging trends', 'Track genre evolution', 'Identify market shifts early'],
              inputs: ['Market data streams', 'Social media signals', 'App store changes'],
              outputs: ['Trend alerts', 'Emerging opportunity briefs'],
              kpis: ['Early detection rate', 'Signal-to-noise ratio'],
              dependencies: ['market-research-agent'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'competitor-intel',
          name: 'Competitor Intelligence Department',
          description: 'Studies competitor games, strategies, and feature sets to identify competitive advantages.',
          roles: [
            {
              id: 'competitor-analysis',
              name: 'Competitor Analysis Agent',
              type: 'ai',
              responsibilities: ['Study competitor games', 'Analyze feature sets', 'Track competitor updates', 'Identify competitive gaps'],
              inputs: ['Competitor game data', 'Feature lists', 'Update logs'],
              outputs: ['Competitor summaries', 'Feature gap analysis'],
              kpis: ['Analysis depth', 'Competitive insight quality'],
              dependencies: [],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'player-insight',
          name: 'Player Insight Department',
          description: 'Profiles target players, understands motivations, and defines audience segments.',
          roles: [
            {
              id: 'player-motivation',
              name: 'Player Motivation Agent',
              type: 'ai',
              responsibilities: ['Profile target players', 'Map player motivations', 'Define player fantasy', 'Segment audiences'],
              inputs: ['Player behavior data', 'Game reviews', 'Survey data'],
              outputs: ['Player motivation map', 'Audience profiles', 'Fantasy definitions'],
              kpis: ['Profile accuracy', 'Motivation mapping quality'],
              dependencies: [],
              maturity: 'foundational'
            },
            {
              id: 'audience-fit',
              name: 'Audience Fit Agent',
              type: 'ai',
              responsibilities: ['Match game concepts to audiences', 'Validate audience-market fit', 'Predict audience reception'],
              inputs: ['Player profiles', 'Game concepts', 'Market data'],
              outputs: ['Audience fit scores', 'Reception predictions'],
              kpis: ['Fit prediction accuracy', 'Audience alignment'],
              dependencies: ['player-motivation', 'market-research-agent'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'genre-opportunity',
          name: 'Genre Opportunity Department',
          description: 'Maps genre landscapes and identifies whitespace opportunities for new game concepts.',
          roles: [
            {
              id: 'genre-mapping',
              name: 'Genre Mapping Agent',
              type: 'ai',
              responsibilities: ['Map genre landscapes', 'Identify genre whitespace', 'Analyze genre saturation', 'Detect hybrid opportunities'],
              inputs: ['Market data', 'Genre classifications', 'Revenue by genre'],
              outputs: ['Genre opportunity brief', 'Whitespace analysis', 'Genre heat map'],
              kpis: ['Opportunity detection quality', 'Genre analysis depth'],
              dependencies: ['market-research-agent', 'competitor-analysis'],
              maturity: 'intermediate'
            }
          ]
        }
      ]
    },
    {
      id: 'design',
      number: 3,
      name: 'Design & Product Architecture',
      color: '#15803d',
      colorLight: '#22c55e',
      icon: '\u{1F3A8}',
      purpose: 'Convert strategic goals and research into game concepts. Define player fantasy, systems, economy, progression, monetization, and LiveOps direction.',
      inputs: ['Strategic priorities', 'Research insights', 'Player profiles', 'Genre opportunities', 'Business constraints'],
      outputs: ['Concept brief', 'Core loop blueprint', 'System architecture', 'Economy framework', 'Monetization framework', 'LiveOps framework', 'Progression map', 'Retention map'],
      kpis: ['Design coherence', 'Player fantasy clarity', 'Scalability of systems', 'Monetization viability', 'Retention potential', 'Implementation clarity'],
      humanCheckpoints: [
        { gate: 'Concept Approval', approver: 'Human Game Design Lead', stage: 'After concept brief' },
        { gate: 'Economy Model Review', approver: 'Human Business Reviewer', stage: 'After economy framework' }
      ],
      departments: [
        {
          id: 'concept-design',
          name: 'Concept Design Department',
          description: 'Creates game concepts, defines emotional promise and player fantasy.',
          roles: [
            {
              id: 'concept-architect',
              name: 'Game Concept Architect Agent',
              type: 'ai',
              responsibilities: ['Create game concept', 'Define fantasy and emotional promise', 'Establish creative vision', 'Write concept brief'],
              inputs: ['Strategic priorities', 'Research insights', 'Player profiles'],
              outputs: ['Concept brief', 'Creative vision document'],
              kpis: ['Player fantasy clarity', 'Concept originality'],
              dependencies: ['strategic-planning', 'player-motivation', 'genre-mapping'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'core-loop',
          name: 'Core Loop Design Department',
          description: 'Designs the fundamental gameplay loop that drives minute-to-minute engagement.',
          roles: [
            {
              id: 'core-loop-designer',
              name: 'Core Loop Designer Agent',
              type: 'ai',
              responsibilities: ['Design core gameplay loop', 'Define action-reward cycle', 'Ensure loop satisfaction', 'Balance difficulty curve'],
              inputs: ['Concept brief', 'Player motivation map'],
              outputs: ['Core loop blueprint', 'Loop flow diagram'],
              kpis: ['Design coherence', 'Loop satisfaction score'],
              dependencies: ['concept-architect'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'meta-system',
          name: 'Meta System Design Department',
          description: 'Designs progression, meta-game systems, and long-term engagement structures.',
          roles: [
            {
              id: 'meta-designer',
              name: 'Meta System Designer Agent',
              type: 'ai',
              responsibilities: ['Define meta systems', 'Design progression layers', 'Create unlock structures', 'Define collection mechanics'],
              inputs: ['Core loop blueprint', 'Player profiles'],
              outputs: ['Meta system architecture', 'Progression map'],
              kpis: ['System scalability', 'Progression depth'],
              dependencies: ['core-loop-designer'],
              maturity: 'intermediate'
            },
            {
              id: 'progression-designer',
              name: 'Progression Designer Agent',
              type: 'ai',
              responsibilities: ['Design progression curves', 'Define milestones', 'Balance progression speed', 'Create reward schedules'],
              inputs: ['Meta system architecture', 'Economy framework'],
              outputs: ['Progression map', 'Milestone definitions', 'Reward schedule'],
              kpis: ['Progression satisfaction', 'Retention correlation'],
              dependencies: ['meta-designer'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'economy-design',
          name: 'Economy Design Department',
          description: 'Designs the in-game economy including currencies, sinks, faucets, and power curves.',
          roles: [
            {
              id: 'economy-balance',
              name: 'Economy Balance Agent',
              type: 'ai',
              responsibilities: ['Define sinks and faucets', 'Design currency systems', 'Balance power curve', 'Model inflation control'],
              inputs: ['Core loop blueprint', 'Meta system architecture', 'Business constraints'],
              outputs: ['Economy framework', 'Currency flow model', 'Power curve definition'],
              kpis: ['Economy stability', 'Balance quality'],
              dependencies: ['core-loop-designer', 'meta-designer'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'monetization-design',
          name: 'Monetization Design Department',
          description: 'Designs the monetization strategy including IAP, ads, and pricing.',
          roles: [
            {
              id: 'monetization-strategist',
              name: 'Monetization Strategist Agent',
              type: 'ai',
              responsibilities: ['Define monetization logic', 'Design IAP/ad placement', 'Create pricing tiers', 'Optimize conversion funnels'],
              inputs: ['Economy framework', 'Player profiles', 'Market benchmarks'],
              outputs: ['Monetization framework', 'Pricing model', 'Ad strategy'],
              kpis: ['Monetization viability', 'Conversion potential'],
              dependencies: ['economy-balance', 'player-motivation'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'liveops-design',
          name: 'LiveOps Design Department',
          description: 'Plans live operations including events, seasonal content, and engagement cadence.',
          roles: [
            {
              id: 'liveops-planner',
              name: 'LiveOps Planner Agent',
              type: 'ai',
              responsibilities: ['Define event cadence', 'Design engagement systems', 'Plan seasonal content', 'Create retention hooks'],
              inputs: ['Core loop blueprint', 'Monetization framework', 'Player profiles'],
              outputs: ['LiveOps framework', 'Event calendar', 'Engagement plan'],
              kpis: ['Event engagement rate', 'Retention impact'],
              dependencies: ['core-loop-designer', 'monetization-strategist'],
              maturity: 'advanced'
            }
          ]
        },
        {
          id: 'ux-session',
          name: 'UX / Session Design Department',
          description: 'Designs session flow, UX patterns, and retention mechanics.',
          roles: [
            {
              id: 'ux-session-flow',
              name: 'UX Session Flow Agent',
              type: 'ai',
              responsibilities: ['Define session flow', 'Design UX patterns', 'Optimize session length', 'Create re-engagement triggers'],
              inputs: ['Core loop blueprint', 'Player profiles'],
              outputs: ['Session flow map', 'UX guidelines'],
              kpis: ['Session satisfaction', 'Re-engagement rate'],
              dependencies: ['core-loop-designer'],
              maturity: 'intermediate'
            },
            {
              id: 'retention-designer',
              name: 'Retention Loop Designer Agent',
              type: 'ai',
              responsibilities: ['Design retention hooks', 'Create comeback mechanics', 'Define notification strategy', 'Optimize day-N retention'],
              inputs: ['Session flow', 'LiveOps framework', 'Player motivation map'],
              outputs: ['Retention map', 'Notification strategy', 'Comeback mechanics'],
              kpis: ['Retention potential', 'Day-N prediction accuracy'],
              dependencies: ['ux-session-flow', 'liveops-planner'],
              maturity: 'advanced'
            }
          ]
        }
      ]
    },
    {
      id: 'production',
      number: 4,
      name: 'Production & Execution',
      color: '#4338ca',
      colorLight: '#6366f1',
      icon: '\u{2699}\uFE0F',
      purpose: 'Turn design into production-ready plans. Generate specs, documents, backlog, prototype scope. Support implementation and coordinate with development.',
      inputs: ['All approved design outputs'],
      outputs: ['Full GDD', 'Feature specs', 'Production backlog', 'Milestone plan', 'Prototype scope document', 'Handoff package'],
      kpis: ['Documentation completeness', 'Handoff clarity', 'Production readiness', 'Implementation support quality'],
      humanCheckpoints: [
        { gate: 'GDD Review', approver: 'Human Game Design Lead', stage: 'After GDD generation' },
        { gate: 'Production Readiness Check', approver: 'Human Technical Lead', stage: 'Before handoff to development' }
      ],
      departments: [
        {
          id: 'gdd-production',
          name: 'GDD Production Department',
          description: 'Generates comprehensive game design documents from approved designs.',
          roles: [
            {
              id: 'gdd-writer',
              name: 'GDD Writer Agent',
              type: 'ai',
              responsibilities: ['Convert design into structured GDD', 'Ensure completeness', 'Maintain consistency', 'Update iteratively'],
              inputs: ['All design outputs', 'Templates'],
              outputs: ['Full GDD', 'GDD sections'],
              kpis: ['Documentation completeness', 'Consistency score'],
              dependencies: ['concept-architect', 'core-loop-designer', 'economy-balance'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'spec-writing',
          name: 'Spec Writing Department',
          description: 'Creates detailed feature specifications for development teams.',
          roles: [
            {
              id: 'spec-writer',
              name: 'System Spec Writer Agent',
              type: 'ai',
              responsibilities: ['Write detailed feature specs', 'Define acceptance criteria', 'Document edge cases', 'Create technical requirements'],
              inputs: ['GDD', 'Design documents'],
              outputs: ['Feature specs', 'Technical requirements'],
              kpis: ['Spec clarity', 'Edge case coverage'],
              dependencies: ['gdd-writer'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'backlog-planning',
          name: 'Backlog & Planning Department',
          description: 'Structures work into actionable backlog items and milestone plans.',
          roles: [
            {
              id: 'backlog-structuring',
              name: 'Backlog Structuring Agent',
              type: 'ai',
              responsibilities: ['Break features into backlog items', 'Prioritize by value', 'Estimate complexity', 'Define sprint-ready tasks'],
              inputs: ['Feature specs', 'Business priorities'],
              outputs: ['Production backlog', 'Sprint plans'],
              kpis: ['Backlog quality', 'Estimation accuracy'],
              dependencies: ['spec-writer'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'prototype-scoping',
          name: 'Prototype Scoping Department',
          description: 'Defines MVP and prototype scope for rapid validation.',
          roles: [
            {
              id: 'prototype-scope',
              name: 'Prototype Scope Agent',
              type: 'ai',
              responsibilities: ['Define prototype scope', 'Identify core features for MVP', 'Minimize scope for validation', 'Create prototype plan'],
              inputs: ['Core loop blueprint', 'Feature specs', 'Business constraints'],
              outputs: ['Prototype scope document', 'MVP feature list'],
              kpis: ['Scope accuracy', 'Validation effectiveness'],
              dependencies: ['spec-writer', 'core-loop-designer'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'handoff-coordination',
          name: 'Handoff Coordination Department',
          description: 'Packages and coordinates the handoff of production-ready materials to development teams.',
          roles: [
            {
              id: 'handoff-coordinator',
              name: 'Handoff Coordinator Agent',
              type: 'ai',
              responsibilities: ['Package outputs for downstream teams', 'Ensure handoff quality', 'Coordinate with development', 'Track delivery status'],
              inputs: ['All production documents', 'Team availability'],
              outputs: ['Handoff package', 'Delivery schedule'],
              kpis: ['Handoff clarity', 'Delivery timeliness'],
              dependencies: ['backlog-structuring', 'prototype-scope'],
              maturity: 'intermediate'
            },
            {
              id: 'production-packaging',
              name: 'Production Packaging Agent',
              type: 'ai',
              responsibilities: ['Format documents for consumption', 'Create summary packages', 'Generate presentation materials'],
              inputs: ['All production outputs'],
              outputs: ['Formatted packages', 'Summary decks'],
              kpis: ['Package usability', 'Format consistency'],
              dependencies: ['handoff-coordinator'],
              maturity: 'advanced'
            }
          ]
        }
      ]
    },
    {
      id: 'review',
      number: 5,
      name: 'Review, Risk & Optimization',
      color: '#d97706',
      colorLight: '#f59e0b',
      icon: '\u{1F6E1}\uFE0F',
      purpose: 'Review quality, detect contradictions, scope risk, monetization risk, economy risk, retention risk. Synthesize outputs and propose improvements.',
      inputs: ['Outputs from design and production layers'],
      outputs: ['Design review report', 'Risk report', 'Issue list', 'Optimization suggestions', 'Final synthesis brief', 'Readiness score'],
      kpis: ['Issue detection quality', 'Practical usefulness of recommendations', 'Risk prevention quality', 'Clarity of final synthesis'],
      humanCheckpoints: [
        { gate: 'Risk Assessment Review', approver: 'Human Product Director', stage: 'After risk report generation' },
        { gate: 'Final Synthesis Approval', approver: 'Human Final Approver', stage: 'Before proceeding to production' }
      ],
      departments: [
        {
          id: 'design-review',
          name: 'Design Review Department',
          description: 'Reviews design outputs for quality, coherence, and completeness.',
          roles: [
            {
              id: 'design-review-agent',
              name: 'Design Review Agent',
              type: 'ai',
              responsibilities: ['Review system consistency', 'Validate design quality', 'Check completeness', 'Identify improvement areas'],
              inputs: ['All design and production outputs'],
              outputs: ['Design review report', 'Quality scores'],
              kpis: ['Review thoroughness', 'Issue detection rate'],
              dependencies: ['gdd-writer'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'risk-analysis',
          name: 'Risk Analysis Department',
          description: 'Identifies and quantifies risks across all design and production dimensions.',
          roles: [
            {
              id: 'scope-risk',
              name: 'Scope Risk Agent',
              type: 'ai',
              responsibilities: ['Detect scope overload', 'Estimate implementation complexity', 'Flag unrealistic timelines'],
              inputs: ['Production backlog', 'Feature specs', 'Resource constraints'],
              outputs: ['Scope risk assessment', 'Complexity estimates'],
              kpis: ['Risk prediction accuracy', 'Scope estimation quality'],
              dependencies: ['backlog-structuring'],
              maturity: 'intermediate'
            },
            {
              id: 'economy-risk',
              name: 'Economy Risk Agent',
              type: 'ai',
              responsibilities: ['Identify economy instability', 'Detect inflation risks', 'Validate balance models'],
              inputs: ['Economy framework', 'Power curve definition'],
              outputs: ['Economy risk report', 'Balance recommendations'],
              kpis: ['Risk identification accuracy', 'Model validation quality'],
              dependencies: ['economy-balance'],
              maturity: 'intermediate'
            },
            {
              id: 'retention-risk',
              name: 'Retention Risk Agent',
              type: 'ai',
              responsibilities: ['Detect retention weaknesses', 'Validate engagement models', 'Predict churn points'],
              inputs: ['Retention map', 'Session flow', 'LiveOps framework'],
              outputs: ['Retention risk report', 'Churn predictions'],
              kpis: ['Churn prediction accuracy', 'Weakness detection rate'],
              dependencies: ['retention-designer'],
              maturity: 'advanced'
            },
            {
              id: 'monetization-risk',
              name: 'Monetization Risk Agent',
              type: 'ai',
              responsibilities: ['Identify monetization issues', 'Validate pricing models', 'Check conversion assumptions'],
              inputs: ['Monetization framework', 'Market benchmarks'],
              outputs: ['Monetization risk report', 'Pricing validation'],
              kpis: ['Risk identification quality', 'Revenue projection accuracy'],
              dependencies: ['monetization-strategist'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'consistency-validation',
          name: 'Consistency Validation Department',
          description: 'Ensures all outputs are consistent and free of contradictions.',
          roles: [
            {
              id: 'consistency-checker',
              name: 'Consistency Checker Agent',
              type: 'ai',
              responsibilities: ['Detect contradictions', 'Find missing systems', 'Validate cross-system consistency', 'Check data integrity'],
              inputs: ['All design and production outputs'],
              outputs: ['Consistency report', 'Contradiction list'],
              kpis: ['Contradiction detection rate', 'Consistency improvement'],
              dependencies: ['design-review-agent'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'optimization-rec',
          name: 'Optimization Recommendation Department',
          description: 'Proposes concrete improvements and optimizations based on review findings.',
          roles: [
            {
              id: 'optimization-advisor',
              name: 'Optimization Advisor Agent',
              type: 'ai',
              responsibilities: ['Propose improvements', 'Prioritize optimizations', 'Suggest design alternatives', 'Estimate improvement impact'],
              inputs: ['Review reports', 'Risk reports', 'Consistency reports'],
              outputs: ['Optimization suggestions', 'Improvement priority list'],
              kpis: ['Suggestion quality', 'Implementation feasibility'],
              dependencies: ['design-review-agent', 'consistency-checker'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'final-synthesis',
          name: 'Final Synthesis Department',
          description: 'Synthesizes all review findings into a final actionable recommendation.',
          roles: [
            {
              id: 'synthesis-agent',
              name: 'Synthesis Agent',
              type: 'ai',
              responsibilities: ['Synthesize final recommendation', 'Calculate readiness score', 'Create executive summary', 'Define go/no-go criteria'],
              inputs: ['All review and risk reports', 'Optimization suggestions'],
              outputs: ['Final synthesis brief', 'Readiness score', 'Executive summary'],
              kpis: ['Synthesis clarity', 'Decision support quality'],
              dependencies: ['optimization-advisor', 'scope-risk', 'economy-risk', 'retention-risk', 'monetization-risk'],
              maturity: 'intermediate'
            }
          ]
        }
      ]
    },
    {
      id: 'knowledge',
      number: 6,
      name: 'Knowledge, Memory & Infrastructure',
      color: '#7e22ce',
      colorLight: '#a855f7',
      icon: '\u{1F9E0}',
      purpose: 'Store all knowledge, provide templates, manage reusable insights, keep internal memory, serve all other layers.',
      inputs: ['All internal outputs', 'External references', 'Lessons learned', 'Historical project data'],
      outputs: ['Reusable knowledge', 'Templates', 'Benchmark packs', 'Pattern libraries', 'Institutional memory', 'Prompt modules', 'Skill definitions'],
      kpis: ['Retrieval usefulness', 'Knowledge quality', 'Reusability', 'Infrastructure support quality'],
      humanCheckpoints: [
        { gate: 'Knowledge Quality Audit', approver: 'Human Game Design Lead', stage: 'Quarterly knowledge review' }
      ],
      departments: [
        {
          id: 'knowledge-base',
          name: 'Shared Knowledge Base',
          description: 'Central repository for all organizational knowledge and reference materials.',
          roles: [
            {
              id: 'knowledge-librarian',
              name: 'Knowledge Librarian Agent',
              type: 'ai',
              responsibilities: ['Maintain central knowledge', 'Organize information', 'Ensure findability', 'Update knowledge base'],
              inputs: ['All internal outputs', 'External references'],
              outputs: ['Organized knowledge base', 'Search indexes'],
              kpis: ['Retrieval usefulness', 'Knowledge coverage'],
              dependencies: [],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'template-library',
          name: 'Template Library',
          description: 'Manages reusable templates for all document types across the studio.',
          roles: [
            {
              id: 'template-manager',
              name: 'Template Manager Agent',
              type: 'ai',
              responsibilities: ['Create templates', 'Maintain template quality', 'Version templates', 'Distribute to agents'],
              inputs: ['Best practices', 'Historical outputs'],
              outputs: ['Templates', 'Template documentation'],
              kpis: ['Template usage rate', 'Template quality'],
              dependencies: ['knowledge-librarian'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'pattern-repo',
          name: 'Pattern Repository',
          description: 'Curates proven design patterns, benchmarks, and reusable solutions.',
          roles: [
            {
              id: 'pattern-curator',
              name: 'Pattern Curator Agent',
              type: 'ai',
              responsibilities: ['Organize reusable patterns', 'Store benchmark data', 'Curate best practices', 'Tag and classify patterns'],
              inputs: ['Successful designs', 'Industry benchmarks', 'Project outcomes'],
              outputs: ['Pattern libraries', 'Benchmark packs'],
              kpis: ['Pattern reusability', 'Benchmark accuracy'],
              dependencies: ['knowledge-librarian'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'project-memory',
          name: 'Historical Project Memory',
          description: 'Preserves learnings and outcomes from past projects for future reference.',
          roles: [
            {
              id: 'memory-retrieval',
              name: 'Memory Retrieval Agent',
              type: 'ai',
              responsibilities: ['Store prior learnings', 'Retrieve relevant history', 'Connect past insights to current work', 'Maintain institutional memory'],
              inputs: ['Project outcomes', 'Lessons learned', 'Historical data'],
              outputs: ['Institutional memory', 'Relevant precedents'],
              kpis: ['Retrieval relevance', 'Memory completeness'],
              dependencies: ['knowledge-librarian'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'workflow-engine',
          name: 'Workflow Engine Support',
          description: 'Provides infrastructure support for workflow execution across all layers.',
          roles: [
            {
              id: 'workflow-support',
              name: 'Workflow Support Agent',
              type: 'ai',
              responsibilities: ['Support workflow execution', 'Manage agent coordination', 'Track workflow status', 'Optimize workflow efficiency'],
              inputs: ['Workflow definitions', 'Agent status'],
              outputs: ['Workflow execution support', 'Status dashboards'],
              kpis: ['Workflow reliability', 'Support responsiveness'],
              dependencies: [],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'prompt-registry',
          name: 'Prompt / Skill Registry',
          description: 'Manages prompts, skills, and reusable AI modules used across the organization.',
          roles: [
            {
              id: 'prompt-architect',
              name: 'Prompt Architect Agent',
              type: 'ai',
              responsibilities: ['Manage prompts and skills', 'Create reusable modules', 'Optimize prompt quality', 'Version prompt library'],
              inputs: ['Agent requirements', 'Performance data'],
              outputs: ['Prompt modules', 'Skill definitions', 'Prompt library'],
              kpis: ['Prompt effectiveness', 'Module reusability'],
              dependencies: ['knowledge-librarian'],
              maturity: 'advanced'
            }
          ]
        }
      ]
    },
    {
      id: 'human-oversight',
      number: 7,
      name: 'Human Oversight & Governance',
      color: '#dc2626',
      colorLight: '#ef4444',
      icon: '\u{1F464}',
      purpose: 'Human approval, strategic intervention, quality control, ethical/practical business decisions, final go/no-go checkpoints.',
      inputs: ['Synthesis reports', 'Output packages', 'Milestone checkpoints'],
      outputs: ['Approval decisions', 'Revision requests', 'Final direction changes', 'Go/no-go decisions'],
      kpis: ['Approval quality', 'Speed of decision-making', 'Practical success rate', 'Reduction of rework'],
      humanCheckpoints: [
        { gate: 'All Gates', approver: 'Human Oversight Board', stage: 'All critical decision points' }
      ],
      departments: [
        {
          id: 'exec-review',
          name: 'Executive Review Board',
          description: 'Senior leadership review of strategic decisions and major outputs.',
          roles: [
            {
              id: 'product-director',
              name: 'Human Product Director',
              type: 'human',
              responsibilities: ['Review strategic outputs', 'Approve major decisions', 'Guide product direction', 'Ensure market alignment'],
              inputs: ['Strategic outputs', 'Synthesis reports'],
              outputs: ['Approval decisions', 'Direction adjustments'],
              kpis: ['Decision quality', 'Speed of approval'],
              dependencies: ['synthesis-agent'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'product-approval',
          name: 'Product Approval Board',
          description: 'Reviews and approves game design and production outputs.',
          roles: [
            {
              id: 'design-lead',
              name: 'Human Game Design Lead',
              type: 'human',
              responsibilities: ['Review design quality', 'Approve game concepts', 'Ensure design vision', 'Guide creative direction'],
              inputs: ['Design outputs', 'Review reports'],
              outputs: ['Design approvals', 'Revision requests'],
              kpis: ['Design quality improvement', 'Approval cycle time'],
              dependencies: ['design-review-agent'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'feasibility-review',
          name: 'Practical Feasibility Review',
          description: 'Validates technical and business feasibility of proposed plans.',
          roles: [
            {
              id: 'tech-lead',
              name: 'Human Technical Lead',
              type: 'human',
              responsibilities: ['Verify technical feasibility', 'Review architecture decisions', 'Assess implementation risk', 'Guide technical direction'],
              inputs: ['Technical specs', 'Architecture plans'],
              outputs: ['Feasibility assessment', 'Technical guidance'],
              kpis: ['Feasibility accuracy', 'Technical risk reduction'],
              dependencies: ['handoff-coordinator'],
              maturity: 'foundational'
            },
            {
              id: 'business-reviewer',
              name: 'Human Business Reviewer',
              type: 'human',
              responsibilities: ['Verify business realism', 'Review monetization assumptions', 'Validate market positioning', 'Check financial projections'],
              inputs: ['Business plans', 'Monetization frameworks', 'Market analysis'],
              outputs: ['Business validation', 'Financial feedback'],
              kpis: ['Business insight quality', 'Revenue prediction accuracy'],
              dependencies: ['monetization-strategist', 'synthesis-agent'],
              maturity: 'foundational'
            }
          ]
        },
        {
          id: 'quality-gate',
          name: 'Quality Gate Review',
          description: 'Final quality checkpoint before any major transition or release.',
          roles: [
            {
              id: 'final-approver',
              name: 'Human Final Approver',
              type: 'human',
              responsibilities: ['Final go/no-go decision', 'Ensure quality standards', 'Verify all gates passed', 'Sign-off on deliverables'],
              inputs: ['All review outputs', 'Gate status reports'],
              outputs: ['Final approval', 'Go/no-go decision'],
              kpis: ['Approval quality', 'Practical success rate'],
              dependencies: ['product-director', 'design-lead', 'tech-lead', 'business-reviewer'],
              maturity: 'foundational'
            }
          ]
        }
      ]
    },
    {
      id: 'automation',
      number: 8,
      name: 'Automation & Triggers',
      color: '#ea580c',
      colorLight: '#f97316',
      icon: '\u{26A1}',
      purpose: 'Monitor events, start workflows automatically, react to new data, re-run analysis and design when needed.',
      inputs: ['System events', 'Data changes', 'External triggers', 'KPI alerts', 'Scheduled tasks'],
      outputs: ['Workflow starts', 'Alerts', 'Reruns', 'Change logs'],
      kpis: ['Automation usefulness', 'Response speed', 'Workflow reliability', 'Relevance of triggers'],
      humanCheckpoints: [
        { gate: 'Automation Rule Review', approver: 'Human Technical Lead', stage: 'When new triggers are added' }
      ],
      departments: [
        {
          id: 'event-monitoring',
          name: 'Event Monitoring Unit',
          description: 'Watches for system events and data changes that should trigger actions.',
          roles: [
            {
              id: 'monitoring-agent',
              name: 'Monitoring Agent',
              type: 'ai',
              responsibilities: ['Watch for changes', 'Track system events', 'Monitor data streams', 'Detect trigger conditions'],
              inputs: ['System events', 'Data streams', 'KPI dashboards'],
              outputs: ['Event notifications', 'Trigger signals'],
              kpis: ['Detection accuracy', 'False positive rate'],
              dependencies: [],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'trigger-management',
          name: 'Trigger Management Unit',
          description: 'Manages trigger rules and determines which events should initiate workflows.',
          roles: [
            {
              id: 'trigger-detection',
              name: 'Trigger Detection Agent',
              type: 'ai',
              responsibilities: ['Evaluate trigger conditions', 'Determine action thresholds', 'Manage trigger rules', 'Prevent false triggers'],
              inputs: ['Event notifications', 'Trigger rules'],
              outputs: ['Trigger activations', 'Rule evaluations'],
              kpis: ['Trigger accuracy', 'Rule effectiveness'],
              dependencies: ['monitoring-agent'],
              maturity: 'intermediate'
            }
          ]
        },
        {
          id: 'rerun-workflow',
          name: 'Re-run Workflow Unit',
          description: 'Manages workflow reruns when conditions change or new data arrives.',
          roles: [
            {
              id: 'workflow-starter',
              name: 'Workflow Starter Agent',
              type: 'ai',
              responsibilities: ['Start workflows automatically', 'Rerun analysis when conditions change', 'Manage workflow queue', 'Track rerun results'],
              inputs: ['Trigger activations', 'Workflow definitions'],
              outputs: ['Workflow starts', 'Reruns', 'Execution logs'],
              kpis: ['Workflow reliability', 'Rerun effectiveness'],
              dependencies: ['trigger-detection'],
              maturity: 'advanced'
            },
            {
              id: 'auto-routing',
              name: 'Auto-Routing Agent',
              type: 'ai',
              responsibilities: ['Route work to appropriate agents', 'Balance workload', 'Optimize routing paths', 'Handle routing exceptions'],
              inputs: ['Workflow definitions', 'Agent availability'],
              outputs: ['Routed tasks', 'Routing logs'],
              kpis: ['Routing accuracy', 'Load balance quality'],
              dependencies: ['workflow-starter'],
              maturity: 'advanced'
            }
          ]
        },
        {
          id: 'alert-notification',
          name: 'Alert & Notification Unit',
          description: 'Sends alerts and notifications to humans and systems when action is needed.',
          roles: [
            {
              id: 'alert-agent',
              name: 'Alert Agent',
              type: 'ai',
              responsibilities: ['Notify humans', 'Send system alerts', 'Manage notification preferences', 'Escalate critical issues'],
              inputs: ['Trigger activations', 'System status', 'Human preferences'],
              outputs: ['Alerts', 'Notifications', 'Escalations'],
              kpis: ['Alert relevance', 'Response speed'],
              dependencies: ['trigger-detection'],
              maturity: 'intermediate'
            }
          ]
        }
      ]
    }
  ],

  workflows: [
    { id: 'strategy-to-research', name: 'Strategy \u2192 Research', description: 'Strategic priorities drive research focus areas', from: { layer: 'strategy', output: 'Strategic priorities' }, to: { layer: 'research', input: 'Business goals' } },
    { id: 'research-to-design', name: 'Research \u2192 Design', description: 'Research insights inform game concept and system design', from: { layer: 'research', output: 'Research reports' }, to: { layer: 'design', input: 'Research insights' } },
    { id: 'design-to-production', name: 'Design \u2192 Production', description: 'Approved designs are converted into production-ready documents', from: { layer: 'design', output: 'System architecture' }, to: { layer: 'production', input: 'All approved design outputs' } },
    { id: 'production-to-review', name: 'Production \u2192 Review', description: 'Production outputs are reviewed for quality and risk', from: { layer: 'production', output: 'Full GDD' }, to: { layer: 'review', input: 'Outputs from design and production layers' } },
    { id: 'review-to-oversight', name: 'Review \u2192 Human Oversight', description: 'Synthesis reports go to humans for final approval', from: { layer: 'review', output: 'Final synthesis brief' }, to: { layer: 'human-oversight', input: 'Synthesis reports' } },
    { id: 'all-to-knowledge', name: 'All Layers \u2192 Knowledge', description: 'All outputs feed into the knowledge base for reuse', from: { layer: 'review', output: 'All outputs' }, to: { layer: 'knowledge', input: 'All internal outputs' } },
    { id: 'knowledge-to-all', name: 'Knowledge \u2192 All Layers', description: 'Knowledge base serves templates and patterns to all layers', from: { layer: 'knowledge', output: 'Templates' }, to: { layer: 'design', input: 'Templates and patterns' } },
    { id: 'automation-triggers', name: 'Automation \u2192 All Layers', description: 'Triggers start workflows across all layers automatically', from: { layer: 'automation', output: 'Workflow starts' }, to: { layer: 'strategy', input: 'System triggers' } },
    { id: 'oversight-feedback', name: 'Human Oversight \u2192 Design', description: 'Human feedback and revision requests flow back to design', from: { layer: 'human-oversight', output: 'Revision requests' }, to: { layer: 'design', input: 'Human feedback' } }
  ],

  roadmap: [
    {
      phase: 1,
      name: 'Foundation',
      objective: 'Define company architecture, create core roles, set up basic knowledge base and workflows.',
      builds: ['Company architecture definition', 'Core AI agent roles', 'Basic knowledge base', 'Core workflow pipelines', 'Human checkpoint framework'],
      whyItMatters: 'Without a solid foundation, subsequent layers have no structure to build on. This phase establishes the organizational skeleton.',
      dependencies: [],
      risks: ['Over-engineering initial architecture', 'Unclear role definitions', 'Insufficient human oversight design'],
      successCriteria: ['Architecture documented and validated', 'Core roles defined with clear I/O', 'Basic workflows operational', 'Human checkpoints in place'],
      layersInvolved: ['strategy', 'knowledge', 'human-oversight']
    },
    {
      phase: 2,
      name: 'Research + Design Core',
      objective: 'Implement strategy, research, and core design capabilities including concept, core loop, and economy design.',
      builds: ['Strategy layer agents', 'Research layer agents', 'Concept design pipeline', 'Core loop design', 'Economy design framework', 'Basic GDD generation'],
      whyItMatters: 'This is where the studio starts producing actual game design work. Research informs design, and the core creative pipeline becomes operational.',
      dependencies: ['Phase 1 complete'],
      risks: ['Research quality insufficient for design decisions', 'Design agents too generic', 'Economy models not validated'],
      successCriteria: ['End-to-end flow from strategy to basic GDD', 'Research produces actionable insights', 'Core loop designs pass human review'],
      layersInvolved: ['strategy', 'research', 'design', 'production']
    },
    {
      phase: 3,
      name: 'Production Readiness',
      objective: 'Add backlog generation, spec writing, prototype scoping, and handoff workflows.',
      builds: ['Backlog generation', 'Spec writing automation', 'Prototype scoping', 'Handoff workflow', 'Production packaging'],
      whyItMatters: 'Bridges the gap between design and development. Without production-ready outputs, designs remain theoretical.',
      dependencies: ['Phase 2 complete'],
      risks: ['Specs not detailed enough for development', 'Backlog items too large or unclear', 'Handoff friction with real teams'],
      successCriteria: ['Generated specs accepted by development teams', 'Backlog items are sprint-ready', 'Handoff process under 24 hours'],
      layersInvolved: ['production']
    },
    {
      phase: 4,
      name: 'Review + Optimization',
      objective: 'Add risk analysis, consistency checks, optimization agents, and synthesis capabilities.',
      builds: ['Risk analysis agents', 'Consistency validation', 'Optimization advisor', 'Synthesis layer', 'Readiness scoring'],
      whyItMatters: 'Quality assurance prevents costly errors in production. The review layer catches issues that individual design agents miss.',
      dependencies: ['Phase 3 complete'],
      risks: ['False positive risk alerts', 'Review bottleneck slowing pipeline', 'Over-cautious synthesis blocking progress'],
      successCriteria: ['Risk detection catches 80%+ of issues', 'Review adds <4 hours to pipeline', 'Synthesis reports are actionable'],
      layersInvolved: ['review']
    },
    {
      phase: 5,
      name: 'Automation + Scaling',
      objective: 'Add triggers, workflow reruns, alerting, deeper knowledge memory, and multi-agent coordination.',
      builds: ['Event monitoring', 'Trigger system', 'Workflow reruns', 'Alert system', 'Deep knowledge memory', 'Multi-agent coordination'],
      whyItMatters: 'Automation reduces manual intervention and keeps the system responsive to changes. The studio starts operating more autonomously.',
      dependencies: ['Phase 4 complete'],
      risks: ['Trigger storms from cascading events', 'Alert fatigue', 'Automation without adequate human oversight'],
      successCriteria: ['Automated responses to common events', 'Alert accuracy >90%', 'Human oversight maintained for critical decisions'],
      layersInvolved: ['automation', 'knowledge']
    },
    {
      phase: 6,
      name: 'Real Studio Operations',
      objective: 'Connect to actual team workflows, use with real projects, add KPI monitoring, and operationalize human review loops.',
      builds: ['Real project integration', 'KPI monitoring dashboards', 'Human review operationalization', 'Performance tracking', 'Continuous improvement loops'],
      whyItMatters: 'The ultimate test: running real projects through the system. This validates the entire architecture under real conditions.',
      dependencies: ['Phase 5 complete'],
      risks: ['Real-world complexity exceeds model assumptions', 'Team adoption resistance', 'KPI gaming'],
      successCriteria: ['Successfully produce design for a real game project', 'Measurable improvement in design velocity', 'Human team satisfaction >7/10'],
      layersInvolved: ['strategy', 'research', 'design', 'production', 'review', 'knowledge', 'human-oversight', 'automation']
    }
  ],

  triggers: [
    { id: 'new-goal', event: 'New business goal submitted', action: 'Initiate strategic planning workflow', layersAffected: ['strategy', 'research'] },
    { id: 'new-market-report', event: 'New market report uploaded', action: 'Run market analysis and update opportunity scoring', layersAffected: ['research', 'strategy'] },
    { id: 'competitor-change', event: 'Competitor changed monetization', action: 'Re-analyze competitor and update monetization strategy', layersAffected: ['research', 'design'] },
    { id: 'kpi-drop', event: 'KPI dropped after test', action: 'Trigger risk analysis and design review', layersAffected: ['review', 'design'] },
    { id: 'prototype-feedback', event: 'Prototype feedback received', action: 'Update design based on feedback and re-run review', layersAffected: ['design', 'review', 'production'] },
    { id: 'new-benchmark', event: 'New benchmark added', action: 'Update knowledge base and re-score relevant designs', layersAffected: ['knowledge', 'review'] }
  ]
};

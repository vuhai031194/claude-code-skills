/**
 * AGS Views — 10 view renderers
 */
(function () {
  'use strict';

  var V = {};
  var C = null; // set after load

  function getC() {
    if (!C) C = window.AGSComponents;
    return C;
  }

  // ========== EXPLORE VIEWS ==========

  // ---- Overview ----
  V.renderOverview = function () {
    var c = getC();
    return c.renderSummaryStats() +
      '<div class="ags-section-title">Organizational Layers <span class="ags-section-count">' + AGS_DATA.layers.length + ' layers</span></div>' +
      '<div class="ags-layer-stack">' +
        AGS_DATA.layers.map(function (l) { return c.renderLayerCard(l); }).join('') +
      '</div>';
  };

  // ---- Layer Detail ----
  V.renderLayer = function (layerId) {
    var c = getC();
    var layer = c.getLayerById(layerId);
    if (!layer) return '<div class="ags-empty">Layer not found.</div>';

    var headerBg = 'background: linear-gradient(135deg, ' + layer.color + '22 0%, transparent 60%); border: 1px solid ' + layer.color + '33;';

    return c.renderMiniMap(layerId) +
      '<div class="ags-layer-header" style="' + headerBg + '">' +
        '<div class="ags-layer-header-top">' +
          '<div class="ags-layer-header-icon">' + layer.icon + '</div>' +
          '<div class="ags-layer-header-title">Layer ' + layer.number + ' \u2014 ' + layer.name + '</div>' +
        '</div>' +
        '<div class="ags-layer-header-purpose">' + layer.purpose + '</div>' +
        '<div class="ags-layer-meta-grid">' +
          '<div class="ags-meta-box"><div class="ags-meta-box-title">Inputs</div><ul class="ags-meta-box-list">' +
            layer.inputs.map(function (i) { return '<li>' + i + '</li>'; }).join('') +
          '</ul></div>' +
          '<div class="ags-meta-box"><div class="ags-meta-box-title">Outputs</div><ul class="ags-meta-box-list">' +
            layer.outputs.map(function (o) { return '<li>' + o + '</li>'; }).join('') +
          '</ul></div>' +
          '<div class="ags-meta-box"><div class="ags-meta-box-title">KPIs</div><ul class="ags-meta-box-list">' +
            layer.kpis.map(function (k) { return '<li>' + k + '</li>'; }).join('') +
          '</ul></div>' +
        '</div>' +
      '</div>' +

      (layer.humanCheckpoints.length > 0 ?
        '<div class="ags-info-box">' +
          '<strong>Human Checkpoints:</strong> ' +
          layer.humanCheckpoints.map(function (h) { return h.gate + ' (' + h.approver + ')'; }).join(' \u2022 ') +
        '</div>' : '') +

      '<div class="ags-section-title">Departments <span class="ags-section-count">' + layer.departments.length + '</span></div>' +
      '<div class="ags-dept-grid">' +
        layer.departments.map(function (d) { return c.renderDeptCard(layerId, d); }).join('') +
      '</div>';
  };

  // ---- Department Detail ----
  V.renderDepartment = function (layerId, deptId) {
    var c = getC();
    var layer = c.getLayerById(layerId);
    if (!layer) return '<div class="ags-empty">Layer not found.</div>';
    var dept = c.getDeptById(layerId, deptId);
    if (!dept) return '<div class="ags-empty">Department not found.</div>';

    return c.renderMiniMap(layerId) +
      '<div class="ags-layer-header" style="background: linear-gradient(135deg, ' + layer.color + '18 0%, transparent 60%); border: 1px solid ' + layer.color + '22;">' +
        '<div class="ags-layer-header-top">' +
          '<div class="ags-layer-header-icon">' + layer.icon + '</div>' +
          '<div class="ags-layer-header-title">' + dept.name + '</div>' +
        '</div>' +
        '<div class="ags-layer-header-purpose">' + dept.description + '</div>' +
      '</div>' +
      '<div class="ags-section-title">Roles <span class="ags-section-count">' + dept.roles.length + '</span></div>' +
      '<div class="ags-role-grid">' +
        dept.roles.map(function (r) { return c.renderRoleCard(layerId, deptId, r); }).join('') +
      '</div>';
  };

  // ---- Role Detail ----
  V.renderRole = function (layerId, deptId, roleId) {
    var c = getC();
    var layer = c.getLayerById(layerId);
    if (!layer) return '<div class="ags-empty">Layer not found.</div>';
    var dept = c.getDeptById(layerId, deptId);
    if (!dept) return '<div class="ags-empty">Department not found.</div>';
    var role = c.getRoleById(layerId, deptId, roleId);
    if (!role) return '<div class="ags-empty">Role not found.</div>';

    var depsHtml = '';
    if (role.dependencies.length > 0) {
      depsHtml = '<div class="ags-role-detail-section">' +
        '<div class="ags-role-detail-section-title">Dependencies</div>' +
        '<div class="ags-role-deps">' +
          role.dependencies.map(function (depId) {
            var found = c.findRoleGlobally(depId);
            if (found) {
              return '<a class="ags-role-dep-link" href="#/ags/layer/' + found.layer.id + '/dept/' + found.dept.id + '/role/' + found.role.id + '">' + found.role.name + '</a>';
            }
            return '<span class="ags-role-dep-link">' + depId + '</span>';
          }).join('') +
        '</div>' +
      '</div>';
    }

    return '<div class="ags-role-detail">' +
      '<div class="ags-role-detail-header">' +
        '<div class="ags-role-detail-name">' + role.name + '</div>' +
        c.renderTypeBadge(role.type) +
        c.renderMaturityBadge(role.maturity) +
      '</div>' +

      '<div class="ags-role-detail-section">' +
        '<div class="ags-role-detail-section-title">Responsibilities</div>' +
        '<ul class="ags-role-detail-list">' +
          role.responsibilities.map(function (r) { return '<li>' + r + '</li>'; }).join('') +
        '</ul>' +
      '</div>' +

      '<div class="ags-role-detail-section">' +
        '<div class="ags-role-detail-section-title">Inputs</div>' +
        '<ul class="ags-role-detail-list">' +
          role.inputs.map(function (i) { return '<li>' + i + '</li>'; }).join('') +
        '</ul>' +
      '</div>' +

      '<div class="ags-role-detail-section">' +
        '<div class="ags-role-detail-section-title">Outputs</div>' +
        '<ul class="ags-role-detail-list">' +
          role.outputs.map(function (o) { return '<li>' + o + '</li>'; }).join('') +
        '</ul>' +
      '</div>' +

      '<div class="ags-role-detail-section">' +
        '<div class="ags-role-detail-section-title">KPIs</div>' +
        '<ul class="ags-role-detail-list">' +
          role.kpis.map(function (k) { return '<li>' + k + '</li>'; }).join('') +
        '</ul>' +
      '</div>' +

      depsHtml +

    '</div>';
  };

  // ========== ANALYZE VIEWS ==========

  // ---- Workflow ----
  V.renderWorkflow = function () {
    var c = getC();
    var arrow = '<div class="ags-workflow-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>';
    var mainFlow = ['strategy', 'research', 'design', 'production', 'review', 'human-oversight'];

    var html = '<div class="ags-info-box">Information flows from Strategy through Research, Design, Production, and Review to Human Oversight. Knowledge serves all layers. Automation triggers workflows across the system.</div>';

    html += '<div class="ags-workflow-flow">';
    mainFlow.forEach(function (layerId, idx) {
      var layer = c.getLayerById(layerId);
      if (!layer) return;

      html += '<a class="ags-workflow-node" href="#/ags/layer/' + layer.id + '" style="border-left: 4px solid ' + layer.color + '">' +
        '<div class="ags-workflow-node-icon">' + layer.icon + '</div>' +
        '<div class="ags-workflow-node-info">' +
          '<div class="ags-workflow-node-name">L' + layer.number + ': ' + layer.name + '</div>' +
          '<div class="ags-workflow-node-purpose">' + layer.purpose.split('.')[0] + '.</div>' +
        '</div>' +
      '</a>';

      // Find workflow edge for this transition
      if (idx < mainFlow.length - 1) {
        var nextLayerId = mainFlow[idx + 1];
        var wf = AGS_DATA.workflows.find(function (w) {
          return w.from.layer === layerId && w.to.layer === nextLayerId;
        });
        html += arrow;
        if (wf) {
          html += '<div class="ags-workflow-edge"><div class="ags-workflow-edge-label">' + wf.name + '</div><div class="ags-workflow-edge-desc">' + wf.description + '</div></div>';
          html += arrow;
        }
      }
    });
    html += '</div>';

    // Supporting layers
    html += '<div class="ags-section-title" style="margin-top:32px">Supporting Layers</div>';
    ['knowledge', 'automation'].forEach(function (layerId) {
      var layer = c.getLayerById(layerId);
      if (!layer) return;
      html += '<a class="ags-workflow-node" href="#/ags/layer/' + layer.id + '" style="border-left: 4px solid ' + layer.color + '; margin-bottom: 12px;">' +
        '<div class="ags-workflow-node-icon">' + layer.icon + '</div>' +
        '<div class="ags-workflow-node-info">' +
          '<div class="ags-workflow-node-name">L' + layer.number + ': ' + layer.name + '</div>' +
          '<div class="ags-workflow-node-purpose">' + layer.purpose.split('.')[0] + '.</div>' +
        '</div>' +
      '</a>';
    });

    return html;
  };

  // ---- Dependencies ----
  V.renderDependencies = function () {
    var c = getC();
    var html = '<div class="ags-info-box">This matrix shows each layer\'s inputs and outputs, revealing how information flows between organizational tiers.</div>';

    html += '<div style="overflow-x:auto"><table class="ags-dep-matrix">' +
      '<thead><tr><th>Layer</th><th>Inputs</th><th>Outputs</th><th>Depts</th><th>Roles</th></tr></thead><tbody>';

    AGS_DATA.layers.forEach(function (layer) {
      html += '<tr>' +
        '<td style="white-space:nowrap"><a href="#/ags/layer/' + layer.id + '" style="color:' + layer.colorLight + ';text-decoration:none;font-weight:600">' + layer.icon + ' ' + layer.name + '</a></td>' +
        '<td><div class="ags-dep-cell-items">' + layer.inputs.map(function (i) { return '<div class="ags-dep-cell-item">' + i + '</div>'; }).join('') + '</div></td>' +
        '<td><div class="ags-dep-cell-items">' + layer.outputs.map(function (o) { return '<div class="ags-dep-cell-item">' + o + '</div>'; }).join('') + '</div></td>' +
        '<td style="text-align:center">' + c.countDepts(layer) + '</td>' +
        '<td style="text-align:center">' + c.countRoles(layer) + '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div>';
    return html;
  };

  // ---- Human-AI View ----
  V.renderHumanAI = function () {
    var c = getC();
    var aiRoles = [];
    var humanRoles = [];

    AGS_DATA.layers.forEach(function (layer) {
      layer.departments.forEach(function (dept) {
        dept.roles.forEach(function (role) {
          var item = { role: role, layer: layer, dept: dept };
          if (role.type === 'ai') aiRoles.push(item);
          else humanRoles.push(item);
        });
      });
    });

    var html = '<div class="ags-info-box">AI agents handle analysis, generation, and automation. Humans provide strategic oversight, approval, and quality governance at critical decision points.</div>';

    html += c.renderSummaryStats();

    html += '<div class="ags-humanai-grid">' +
      '<div class="ags-humanai-column">' +
        '<div class="ags-humanai-column-title ai-title">AI Agents (' + aiRoles.length + ')</div>' +
        aiRoles.map(function (item) {
          return '<div class="ags-humanai-card">' +
            '<div class="ags-humanai-card-name">' + item.role.name + '</div>' +
            '<div class="ags-humanai-card-layer" style="color:' + item.layer.colorLight + '">' + item.layer.icon + ' ' + item.layer.name + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<div class="ags-humanai-column">' +
        '<div class="ags-humanai-column-title human-title">Human Roles (' + humanRoles.length + ')</div>' +
        humanRoles.map(function (item) {
          return '<div class="ags-humanai-card">' +
            '<div class="ags-humanai-card-name">' + item.role.name + '</div>' +
            '<div class="ags-humanai-card-layer" style="color:' + item.layer.colorLight + '">' + item.layer.icon + ' ' + item.layer.name + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>';

    // Human checkpoints
    html += '<div class="ags-checkpoints"><div class="ags-section-title" style="margin-top:32px">Human Checkpoints</div>' +
      '<div class="ags-checkpoint-list">';

    AGS_DATA.layers.forEach(function (layer) {
      layer.humanCheckpoints.forEach(function (cp) {
        html += '<div class="ags-checkpoint-card">' +
          '<div class="ags-checkpoint-layer" style="color:' + layer.colorLight + '">' + layer.icon + ' ' + layer.name + '</div>' +
          '<div><div class="ags-checkpoint-gate">' + cp.gate + '</div>' +
          '<div class="ags-checkpoint-detail">' + cp.approver + ' \u2014 ' + cp.stage + '</div></div>' +
        '</div>';
      });
    });

    html += '</div></div>';
    return html;
  };

  // ---- Roadmap ----
  V.renderRoadmap = function () {
    var c = getC();
    var html = '<div class="ags-info-box">The implementation roadmap shows how to build this AI Game Studio progressively across 6 phases, from foundation to real studio operations.</div>';

    html += '<div class="ags-roadmap">';
    AGS_DATA.roadmap.forEach(function (phase) {
      var phaseId = 'roadmap-phase-' + phase.phase;
      html += '<div class="ags-roadmap-phase">' +
        '<div class="ags-roadmap-dot"></div>' +
        '<div class="ags-roadmap-phase-header" onclick="document.getElementById(\'' + phaseId + '\').classList.toggle(\'expanded\');this.querySelector(\'.ags-roadmap-phase-toggle\').classList.toggle(\'expanded\')">' +
          '<span class="ags-roadmap-phase-number">Phase ' + phase.phase + '</span>' +
          '<span class="ags-roadmap-phase-name">' + phase.name + '</span>' +
          '<span class="ags-roadmap-phase-toggle">\u25BC</span>' +
        '</div>' +
        '<div class="ags-roadmap-phase-body" id="' + phaseId + '">' +
          '<div class="ags-roadmap-objective">' + phase.objective + '</div>' +

          '<div class="ags-roadmap-subsection"><div class="ags-roadmap-subsection-title">What Gets Built</div><ul>' +
            phase.builds.map(function (b) { return '<li>' + b + '</li>'; }).join('') +
          '</ul></div>' +

          '<div class="ags-roadmap-subsection"><div class="ags-roadmap-subsection-title">Why It Matters</div><p style="font-size:12px;color:var(--text-dim);line-height:1.6">' + phase.whyItMatters + '</p></div>' +

          (phase.dependencies.length > 0 ?
            '<div class="ags-roadmap-subsection"><div class="ags-roadmap-subsection-title">Dependencies</div><ul>' +
              phase.dependencies.map(function (d) { return '<li>' + d + '</li>'; }).join('') +
            '</ul></div>' : '') +

          '<div class="ags-roadmap-subsection"><div class="ags-roadmap-subsection-title">Risks</div><ul>' +
            phase.risks.map(function (r) { return '<li>' + r + '</li>'; }).join('') +
          '</ul></div>' +

          '<div class="ags-roadmap-subsection"><div class="ags-roadmap-subsection-title">Success Criteria</div><ul>' +
            phase.successCriteria.map(function (s) { return '<li>' + s + '</li>'; }).join('') +
          '</ul></div>' +

          '<div class="ags-roadmap-layers">' +
            phase.layersInvolved.map(function (lid) {
              var layer = c.getLayerById(lid);
              return layer ? '<span class="ags-roadmap-layer-tag" style="color:' + layer.colorLight + ';border-color:' + layer.color + '44">' + layer.icon + ' ' + layer.name + '</span>' : '';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  };

  // ---- Maturity ----
  V.renderMaturity = function () {
    var c = getC();
    var levels = [
      { id: 'foundational', label: 'Foundational', desc: 'Core capabilities needed from day one. These roles form the skeleton of the organization.' },
      { id: 'intermediate', label: 'Intermediate', desc: 'Extended capabilities that add depth. Implement after foundational roles are stable.' },
      { id: 'advanced', label: 'Advanced', desc: 'Sophisticated capabilities for mature operations. Requires preceding layers to be operational.' }
    ];

    var html = '<div class="ags-info-box">Roles are grouped by capability maturity level. Start with foundational roles, then progressively build intermediate and advanced capabilities.</div>';

    levels.forEach(function (level) {
      var roles = c.getAllRolesByMaturity(level.id);
      html += '<div class="ags-maturity-section">' +
        '<div class="ags-maturity-section-title">' +
          c.renderMaturityBadge(level.id) +
          '<span>' + level.label + '</span>' +
          '<span class="ags-section-count">' + roles.length + ' roles</span>' +
        '</div>' +
        '<p style="font-size:13px;color:var(--text-dim);margin-bottom:14px">' + level.desc + '</p>' +
        '<div class="ags-maturity-roles">' +
          roles.map(function (item) {
            return '<div class="ags-maturity-role">' +
              '<div><div class="ags-maturity-role-name">' + item.role.name + '</div>' +
              '<div class="ags-maturity-role-layer" style="color:' + item.layer.colorLight + '">' + item.layer.icon + ' ' + item.layer.name + '</div></div>' +
              c.renderTypeBadge(item.role.type) +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>';
    });

    return html;
  };

  // ---- Deployment ----
  V.renderDeployment = function () {
    var c = getC();
    var now = c.getAllRolesByMaturity('foundational');
    var later = c.getAllRolesByMaturity('intermediate').concat(c.getAllRolesByMaturity('advanced'));

    var html = '<div class="ags-info-box">Foundational roles can be implemented now. Intermediate and advanced roles should be deployed progressively as the organization matures.</div>';

    html += '<div class="ags-deploy-grid">' +
      '<div class="ags-deploy-column">' +
        '<div class="ags-deploy-column-title now">\u2713 Implement Now (' + now.length + ')</div>' +
        now.map(function (item) {
          return '<div class="ags-deploy-item">' +
            '<div class="ags-deploy-item-name">' + item.role.name + '</div>' +
            '<div class="ags-deploy-item-layer" style="color:' + item.layer.colorLight + '">' + item.layer.icon + ' ' + item.layer.name + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<div class="ags-deploy-column">' +
        '<div class="ags-deploy-column-title later">\u23F3 Implement Later (' + later.length + ')</div>' +
        later.map(function (item) {
          return '<div class="ags-deploy-item">' +
            '<div class="ags-deploy-item-name">' + item.role.name + ' ' + c.renderMaturityBadge(item.role.maturity) + '</div>' +
            '<div class="ags-deploy-item-layer" style="color:' + item.layer.colorLight + '">' + item.layer.icon + ' ' + item.layer.name + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>';

    // Triggers
    html += '<div class="ags-section-title" style="margin-top:40px">Automation Triggers <span class="ags-section-count">' + AGS_DATA.triggers.length + '</span></div>' +
      '<div class="ags-trigger-list">';

    AGS_DATA.triggers.forEach(function (trigger) {
      html += '<div class="ags-trigger-card">' +
        '<div class="ags-trigger-icon">\u26A1</div>' +
        '<div class="ags-trigger-info">' +
          '<div class="ags-trigger-event">' + trigger.event + '</div>' +
          '<div class="ags-trigger-action">' + trigger.action + '</div>' +
          '<div class="ags-trigger-layers">' +
            trigger.layersAffected.map(function (lid) {
              var layer = c.getLayerById(lid);
              return layer ? '<span class="ags-trigger-layer-tag" style="color:' + layer.colorLight + '">' + layer.icon + ' ' + layer.name + '</span>' : '';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>';
    });

    html += '</div>';
    return html;
  };

  window.AGSViews = V;
})();

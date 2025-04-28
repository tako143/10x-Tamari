const config = {
    mode: 'active',
    maxLoad: 100,
    secure: true,
}

function auditConfig(cfg) {
    const entries = [];
    for(key in cfg) {
        entries.push(`${key}: ${cfg[key]}`);
    }
    return entries;
}

const report = auditConfig(config);
console.log(`Audit report: ${report.join(', ')}`);
export const scripts = [
  {
    cmd: "whoami",
    out: ["analyst@soc-node"],
  },
  {
    cmd: "uptime",
    out: ["14:22:01 up 21 days,  3 users,  load average: 0.42, 0.37, 0.31"],
  },
  {
    cmd: "nmap -sV 10.0.0.12",
    out: [
      "PORT   STATE SERVICE",
      "22/tcp open  ssh",
      "80/tcp open  http",
      "443/tcp open https",
    ],
  },
  {
    cmd: "nmap -p- --min-rate 5000 10.0.0.12",
    out: [
      "Discovered open port 22/tcp",
      "Discovered open port 80/tcp",
      "Discovered open port 443/tcp",
      "Scan completed in 6.32 seconds",
    ],
  },
  {
    cmd: "curl -I http://10.0.0.12",
    out: [
      "HTTP/1.1 200 OK",
      "Server: nginx/1.18.0",
      "X-Powered-By: PHP/8.0",
    ],
  },
  {
    cmd: "nikto -h http://10.0.0.12",
    out: [
      "+ Server leaks inodes via ETags",
      "+ X-Frame-Options header missing",
      "+ Potential SQL injection points detected",
    ],
  },
  {
    cmd: "sqlmap -u http://10.0.0.12/login --batch",
    out: [
      "[INFO] testing connection to the target URL",
      "[CRITICAL] SQL injection vulnerability detected",
      "[ACTION] Attack blocked by WAF",
    ],
  },
  {
    cmd: "tail -f /var/log/auth.log",
    out: [
      "Failed password for root from 203.0.113.44",
      "Failed password for admin from 203.0.113.44",
      "⚠ Brute force attempt detected",
    ],
  },
  {
    cmd: "fail2ban-client status sshd",
    out: [
      "Currently banned IPs: 203.0.113.44",
      "Total banned: 1",
    ],
  },
  {
    cmd: "iptables -L -n",
    out: [
      "DROP tcp -- 203.0.113.44 0.0.0.0/0",
      "ACCEPT all -- 10.0.0.0/24 anywhere",
    ],
  },
  {
    cmd: "tcpdump -i eth0",
    out: [
      "TCP 10.0.0.12 → 10.0.0.5 [SYN]",
      "UDP 10.0.0.7 → 10.0.0.12",
      "⚠ Anomalous traffic spike",
    ],
  },
  {
    cmd: "iftop -i eth0",
    out: [
      "10.0.0.7 => 10.0.0.12  12.4Mb",
      "10.0.0.9 => 10.0.0.12  9.8Mb",
    ],
  },
  {
    cmd: "netstat -tulnp",
    out: [
      "tcp 0 0 0.0.0.0:22 LISTEN sshd",
      "tcp 0 0 0.0.0.0:80 LISTEN nginx",
    ],
  },
  {
    cmd: "journalctl -p 3 -xb",
    out: [
      "kernel: TCP SYN flood detected",
      "kernel: Possible port scan in progress",
    ],
  },
  {
    cmd: "systemctl status nginx",
    out: [
      "Active: active (running)",
      "Handled 1242 requests",
    ],
  },
  {
    cmd: "clamav --scan /var/www",
    out: [
      "Scanning files...",
      "No malware detected",
    ],
  },
  {
    cmd: "rkhunter --check",
    out: [
      "Rootkit scan completed",
      "No rootkits found",
    ],
  },
  {
    cmd: "ps aux | grep suspicious",
    out: [
      "No suspicious processes found",
    ],
  },
  {
    cmd: "last -a",
    out: [
      "admin pts/0 10.0.0.5",
      "analyst pts/1 10.0.0.6",
    ],
  },
  {
    cmd: "cat /etc/passwd | wc -l",
    out: ["42 users"],
  },
  {
    cmd: "chmod 600 /etc/shadow",
    out: ["Permissions hardened"],
  },
  {
    cmd: "auditctl -l",
    out: [
      "Audit rules active",
      "File integrity monitoring enabled",
    ],
  },
  {
    cmd: "suricata -T",
    out: [
      "Suricata rules loaded successfully",
    ],
  },
  {
    cmd: "grep ALERT /var/log/suricata/fast.log",
    out: [
      "ET SCAN Possible Nmap scan detected",
      "ET WEB_SERVER SQL Injection attempt",
    ],
  },
  {
    cmd: "ai-anomaly-engine --analyze traffic",
    out: [
      "Model confidence: 97%",
      "Anomaly detected: DDoS pattern",
    ],
  },
  {
    cmd: "apply mitigation ddos",
    out: [
      "Rate limiting enabled",
      "Traffic normalized",
    ],
  },
  {
    cmd: "kubectl get pods",
    out: [
      "api-server Running",
      "auth-service Running",
    ],
  },
  {
    cmd: "docker ps",
    out: [
      "nginx_container Up 3 days",
      "auth_container Up 3 days",
    ],
  },
  {
    cmd: "docker logs auth_container",
    out: [
      "Invalid token attempt blocked",
      "JWT signature mismatch",
    ],
  },
  {
    cmd: "vault status",
    out: [
      "Vault initialized",
      "Seal status: unsealed",
    ],
  },
  {
    cmd: "rotate keys --service auth",
    out: [
      "Keys rotated successfully",
    ],
  },
  {
    cmd: "backup --incremental",
    out: [
      "Backup completed successfully",
    ],
  },
  {
    cmd: "generate incident report",
    out: [
      "Threat: SQL Injection",
      "Status: Mitigated",
      "Impact: None",
    ],
  },
  {
    cmd: "close incident --id 7742",
    out: [
      "Incident closed ✔",
    ],
  },
  {
    cmd: "echo 'SOC monitoring active'",
    out: ["SOC monitoring active"],
  },
];

export const alerts = [
  { level: "INFO", msg: "Packet inspection engine initialized" },
  { level: "INFO", msg: "Network traffic baseline established" },
  { level: "INFO", msg: "TLS certificate validation successful" },
  { level: "INFO", msg: "Firewall ruleset loaded" },
  { level: "INFO", msg: "Endpoint telemetry streaming active" },

  { level: "WARN", msg: "Unusual outbound traffic volume detected" },
  { level: "WARN", msg: "Multiple failed SSH login attempts" },
  { level: "WARN", msg: "Port scan behavior observed" },
  { level: "WARN", msg: "DNS query anomaly detected" },
  { level: "WARN", msg: "Suspicious user-agent identified" },

  { level: "CRITICAL", msg: "TCP SYN flood attack detected" },
  { level: "CRITICAL", msg: "SQL injection attempt blocked" },
  { level: "CRITICAL", msg: "Cross-site scripting payload detected" },
  { level: "CRITICAL", msg: "Remote code execution attempt blocked" },
  { level: "CRITICAL", msg: "Unauthorized privilege escalation attempt" },

  { level: "INFO", msg: "Fail2Ban rule triggered for SSH service" },
  { level: "INFO", msg: "IP address temporarily banned" },
  { level: "INFO", msg: "Web application firewall rule applied" },
  { level: "INFO", msg: "Rate limiting activated on API gateway" },
  { level: "INFO", msg: "Malicious session terminated" },

  { level: "WARN", msg: "Abnormal login time detected" },
  { level: "WARN", msg: "Multiple geographic login sources detected" },
  { level: "WARN", msg: "Suspicious API token usage" },
  { level: "WARN", msg: "Expired TLS certificate detected" },
  { level: "WARN", msg: "Weak encryption cipher negotiated" },

  { level: "CRITICAL", msg: "Brute force authentication attack detected" },
  { level: "CRITICAL", msg: "Credential stuffing attack blocked" },
  { level: "CRITICAL", msg: "Known malware signature detected" },
  { level: "CRITICAL", msg: "Ransomware behavior blocked" },
  { level: "CRITICAL", msg: "Unauthorized data exfiltration attempt" },

  { level: "INFO", msg: "Endpoint malware scan completed successfully" },
  { level: "INFO", msg: "No persistence mechanisms found" },
  { level: "INFO", msg: "File integrity monitoring completed" },
  { level: "INFO", msg: "System binaries verified" },
  { level: "INFO", msg: "Kernel module validation passed" },

  { level: "WARN", msg: "Unusual process execution pattern" },
  { level: "WARN", msg: "Unsigned binary execution attempt" },
  { level: "WARN", msg: "PowerShell obfuscation detected" },
  { level: "WARN", msg: "Living-off-the-land technique observed" },
  { level: "WARN", msg: "Suspicious scheduled task created" },

  { level: "CRITICAL", msg: "Rootkit installation attempt detected" },
  { level: "CRITICAL", msg: "Unauthorized kernel modification blocked" },
  { level: "CRITICAL", msg: "Persistence mechanism detected and removed" },
  { level: "CRITICAL", msg: "Command-and-control communication blocked" },
  { level: "CRITICAL", msg: "Beaconing behavior detected" },

  { level: "INFO", msg: "Threat intelligence feed updated" },
  { level: "INFO", msg: "IOC correlation completed" },
  { level: "INFO", msg: "MITRE ATT&CK techniques mapped" },
  { level: "INFO", msg: "Incident severity re-evaluated" },
  { level: "INFO", msg: "Playbook automation executed" },

  { level: "WARN", msg: "Cloud IAM role misconfiguration detected" },
  { level: "WARN", msg: "Publicly exposed storage bucket detected" },
  { level: "WARN", msg: "Excessive permissions granted to service account" },
  { level: "WARN", msg: "Suspicious API activity in cloud workload" },
  { level: "WARN", msg: "Container image vulnerability detected" },

  { level: "CRITICAL", msg: "Compromised cloud credentials detected" },
  { level: "CRITICAL", msg: "Unauthorized cloud resource creation blocked" },
  { level: "CRITICAL", msg: "Lateral movement attempt detected" },
  { level: "CRITICAL", msg: "Internal network reconnaissance detected" },
  { level: "CRITICAL", msg: "Sensitive data access anomaly detected" },

  { level: "INFO", msg: "AI anomaly detection model recalibrated" },
  { level: "INFO", msg: "Behavioral baseline updated" },
  { level: "INFO", msg: "False positive rate reduced" },
  { level: "INFO", msg: "SOC analyst notified" },
  { level: "INFO", msg: "Incident response workflow completed" },

  { level: "WARN", msg: "Elevated error rate observed in authentication service" },
  { level: "WARN", msg: "Service degradation detected" },
  { level: "WARN", msg: "Potential denial-of-service pattern emerging" },
  { level: "WARN", msg: "Unusual database query volume detected" },
  { level: "WARN", msg: "Sensitive table access frequency increased" },

  { level: "CRITICAL", msg: "Zero-day exploit behavior detected" },
  { level: "CRITICAL", msg: "Advanced persistent threat indicators observed" },
  { level: "CRITICAL", msg: "Insider threat risk detected" },
  { level: "CRITICAL", msg: "Critical incident escalated to IR team" },
  { level: "CRITICAL", msg: "Full containment measures applied" },
];






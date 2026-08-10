function FindProxyForURL(url, host) {
  const CEP = "HTTPS via.prod.securegateway.goog:443";

  /* CEP 앱 — 명시 도메인 */
  const sites = [
    /* Zendesk */
    "oliveyoungglobal.zendesk.com",
    "help.us.oliveyoung.com",
    "static.zdassets.com",
    "assets.zendesk.com",
    /* 사내 앱 */
    "bo.oliveyoung.com",
    "use-bo.oliveyoung.com",
    "private.oliveyoung.com",
    "cj.cj.net",
    "oliveyoung.okta.com"
  ];

  for (const site of sites) {
    if (localHostOrDomainIs(host, site) || dnsDomainIs(host, site)) {
      return CEP;
    }
  }

  /* Zendesk CDN wildcard (endpointMatchers *.zdassets.com / *.zendesk.com 와 동기화) */
  if (dnsDomainIs(host, "zdassets.com") ||
      dnsDomainIs(host, "zopim.com") ||
      dnsDomainIs(host, "zendesk.com")) {
    return CEP;
  }

  return "DIRECT";
}

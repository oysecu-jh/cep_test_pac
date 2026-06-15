function FindProxyForURL(url, host) {
  const PROXY = "HTTPS via.prod.securegateway.goog:443";
  
  const sites = [
    "oliveyoungglobal.zendesk.com",
    "bo.oliveyoung.com",
    "use-bo.oliveyoung.com",
    "private.oliveyoung.com"
  ];
  
  for (const site of sites) {
    if (localHostOrDomainIs(host, site) || dnsDomainIs(host, site)) {
      return PROXY;
    }
  }
  
  return 'DIRECT';
}

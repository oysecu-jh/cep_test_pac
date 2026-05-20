function FindProxyForURL(url, host) {
  const PROXY = "HTTPS via.prod.securegateway.goog:443";
  const sites = ["oliveyoungglobal.zendesk.com"]; 
  
  for (const site of sites) {
    if (shExpMatch(url, 'https://' + site + '/*') || shExpMatch(url, '*.' + site + '/*')) {
      return PROXY;
    }
  }
  return 'DIRECT';
}
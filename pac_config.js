function FindProxyForURL(url, host) {
  const PROXY = "HTTPS via.prod.securegateway.goog:443";
  
  // 구글 보안 게이트웨이(Secure Gateway)로 라우팅할 대상 도메인 리스트
  const sites = [
    "oliveyoungglobal.zendesk.com",
    "bo.oliveyoung.com",
    "use-bo.oliveyoung.com"// 
  ];
  
  for (const site of sites) {
    // 호스트 이름이 정확히 일치하거나(localHostOrDomainIs), 해당 도메인의 하위 서브도메인인 경우(dnsDomainIs)
    if (localHostOrDomainIs(host, site) || dnsDomainIs(host, site)) {
      return PROXY;
    }
  }
  
  return 'DIRECT';
}

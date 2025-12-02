"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Menu, ArrowUpRight, TrendingDown, Rocket, Brain, ShieldCheck, RefreshCw, AlertTriangle, Building2, Users, Trophy, Medal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function LandingPage() {
  // Logos for infinite scroll (Duplicated to ensure smooth looping)
  const logos = [
    "NTT DATA", "SB Technology", "NEC", "Recruit", "Mizuho", 
    "KDDI", "Hitachi", "Fujitsu", "SoftBank", "Rakuten",
    "NTT DATA", "SB Technology", "NEC", "Recruit", "Mizuho", 
    "KDDI", "Hitachi", "Fujitsu", "SoftBank", "Rakuten"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#333333] bg-white">
      {/* Header - Logo Only */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E5E5] h-20 flex items-center">
        <div className="container-custom w-full flex items-center justify-start">
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12">
              <Image
                src="https://www.aeyescan.jp/wp-content/uploads/2024/02/logo.png"
                alt="AeyeScan"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Modern and Clean */}
        <section className="relative bg-gradient-to-br from-[#F3F8FC] to-[#EAF2F8] py-16 md:py-24 overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-left">
                <h1 className="text-[#333333] font-bold text-3xl md:text-5xl tracking-tight mb-4 leading-tight whitespace-nowrap">
                  Webアプリケーション診断
                </h1>
                <p className="text-lg md:text-2xl font-bold text-[#666666] mb-8 leading-snug">
                  セキュアなWebサービス開発・<br className="hidden md:block"/>提供を支える
                </p>
                
                <div className="mb-10">
                  <p className="text-[#666666] leading-relaxed text-lg font-medium">
                    企業の数だけ、診断の形がある。<br/>
                    自社にあった脆弱性診断を選びませんか？
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-start">
                  <Button className="bg-[#FFB629] hover:bg-[#FFA500] text-white rounded-md px-8 py-6 text-lg font-bold shadow-lg transition-all hover:-translate-y-0.5 min-w-[240px]" asChild>
                    <Link href="#download">
                      サービス資料 DL
                      <ArrowRight className="w-5 h-5 ml-2 bg-white/20 rounded-full p-0.5" />
                    </Link>
                  </Button>
                  <Button className="bg-[#8FA6B6] hover:bg-[#7D95A6] text-white rounded-md px-8 py-6 text-lg font-bold shadow-lg transition-all hover:-translate-y-0.5 min-w-[240px]" asChild>
                    <Link href="#contact">
                      お問い合わせ
                      <ArrowRight className="w-5 h-5 ml-2 bg-white/20 rounded-full p-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative">
        <Image
                  src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/img_fv.png"
                  alt="Webアプリケーション診断"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
          priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Logos Scroll Section - Image from Reference LP */}
        <section className="bg-white py-12 border-b border-[#E5E5E5] overflow-hidden">
          <div className="container-custom">
            {/* Top: Text */}
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl font-bold text-[#333333] mb-6">
                AeyeScanは有償契約<span className="text-[#FFB629] text-4xl md:text-5xl mx-1">300</span>社以上、<br className="md:hidden"/>
                さまざまな業種・規模の企業さまに導入いただいています
              </p>
              {/* SP only: No.1 Laurel */}
              <div className="md:hidden relative w-48 h-24 mx-auto mb-6">
                <Image
                  src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/top/shea_mark_sp.png"
                  alt="国内市場シェアNo.1"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            
            {/* Middle: PC - No.1 Laurel and Logos side by side, SP - Logos only */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
              {/* PC: Left - No.1 Laurel */}
              <div className="hidden md:block relative w-64 h-32 md:w-80 md:h-40 shrink-0">
                <Image
                  src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/top/shea_mark.png"
                  alt="国内市場シェアNo.1"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              
              {/* Right: Logos Scroll Image */}
              <div className="flex-1 w-full h-36 md:h-40 relative overflow-hidden">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(https://www.aeyescan.jp/wp-content/uploads/logo_no115-118.png)',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: '50% center',
                    backgroundSize: 'auto 145px'
                  }}
                />
              </div>
            </div>
            
            {/* Bottom: Annotations */}
            <div className="text-center">
              <div className="text-[10px] text-[#999999] space-y-1">
                <p>※ 富士キメラ総研調べ「2025 ネットワークセキュリティビジネス調査総覧 市場編」Webアプリケーション脆弱性検査ツール ベンダーシェア（2024年度実績）</p>
                <p>※ ITR調べ「ITR Market View：サイバー・セキュリティ対策市場2025」SaaS型Webアプリケーション脆弱性管理市場：ベンダー別売上金額シェア（2023年度実績）</p>
              </div>
            </div>
          </div>
        </section>

                {/* Usage Scenes */}
                <section className="py-24 bg-white">
                  <div className="container-custom">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 leading-tight">
                        Webアプリケーション診断の活用場面
                      </h2>
                      <div className="w-16 h-1 bg-[#002d5a] mx-auto rounded-full mb-12"></div>
                      <p className="text-[#666666] leading-relaxed text-lg font-medium max-w-3xl mx-auto">
                        デジタルサービスがビジネスの主流となる昨今、<br className="hidden md:block"/>
                        Webアプリケーション診断の要求レベルは高まり続けています。<br/><br/>
                進化するセキュリティ脅威に対応するためには高頻度での診断が必要となる反面、<br className="hidden md:block"/>
                リリース頻度・速度は高まる一方となっています。
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {[
                { 
                  text: "新規サービスや機能の\nリリース前", 
                  icon: <Rocket className="w-8 h-8 text-[#002d5a]" />
                },
                { 
                  text: "既存システムの\n大規模アップデート後", 
                  icon: <RefreshCw className="w-8 h-8 text-[#002d5a]" />
                },
                { 
                  text: "セキュリティ事故や\nインシデントの発生後", 
                  icon: <AlertTriangle className="w-8 h-8 text-[#002d5a]" />
                },
                { 
                  text: "セキュリティ要件のある\n業界での運用", 
                  icon: <Building2 className="w-8 h-8 text-[#002d5a]" />
                },
                { 
                  text: "外部ベンダーや委託先が開発した\nシステムの受け入れ時", 
                  icon: <Users className="w-8 h-8 text-[#002d5a]" />
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white p-8 rounded-lg shadow-sm border border-[#E5E5E5] hover:border-[#002d5a] transition-all flex flex-col items-center text-center gap-4 group"
                >
                  <div className="bg-[#f0f7ff] p-4 rounded-full group-hover:bg-[#e6f0fa] transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-bold text-[#333333] text-lg leading-relaxed whitespace-pre-line">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* Challenges & Solution Connected Section */}
                <section className="py-24 bg-[#F8F9FA]">
                  <div className="container-custom">
                    {/* Challenges Part */}
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 leading-tight">
                        Webアプリケーション診断において<br/>
                        多くの企業が抱える課題
                      </h2>
                      <div className="w-16 h-1 bg-[#002d5a] mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
                      <div className="relative">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#E5E5E5] text-center relative z-10 h-full flex flex-col justify-center items-center">
                          <h3 className="font-bold text-[#333333] leading-loose text-lg whitespace-pre-line">
                            ベンダーに外注していて<br/>
                            <span className="text-[#E74C3C] text-xl md:text-2xl font-bold">コスト・スケジュール</span><br/>
                            がネックになっている
                          </h3>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white filter drop-shadow-sm z-20"></div>
                      </div>

                      <div className="relative">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#E5E5E5] text-center relative z-10 h-full flex flex-col justify-center items-center">
                          <h3 className="font-bold text-[#333333] leading-loose text-lg whitespace-pre-line">
                            すべてのサービスに<br/>
                            <span className="text-[#E74C3C] text-xl md:text-2xl font-bold">定期的・網羅的な診断</span><br/>
                            ができていない
                          </h3>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white filter drop-shadow-sm z-20"></div>
                      </div>

                      <div className="relative">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#E5E5E5] text-center relative z-10 h-full flex flex-col justify-center items-center">
                          <h3 className="font-bold text-[#333333] leading-loose text-lg whitespace-pre-line">
                            ツールを導入したが、<br/>
                            <span className="text-[#E74C3C] text-xl md:text-2xl font-bold">結局手間・時間</span><br/>
                            がかかっている
                          </h3>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white filter drop-shadow-sm z-20"></div>
                      </div>
                    </div>

                    {/* Solution Part (Connected) */}
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-3xl md:text-5xl font-bold text-[#333333] mb-8 leading-tight tracking-tight">
                        手元ですぐに診断できる環境の<br/>
                        <span className="text-[#002d5a]">必要性が高まっている</span>
                      </h2>
                      <p className="text-[#666666] leading-relaxed text-lg mb-12">
                        これらの課題から、Webアプリケーション診断を自社内で実施する体制を整えること、<br/>
                        いわゆる「内製化」を検討・進める企業が増えています。<br/>
                        内製化をすることで、外注と比べて安価に実施できることはもちろん、スケジュールがコントロールしやすくなり、<br/>
                        然るべき頻度やタイミングで診断を実施することが可能になります。
                      </p>

                      <div className="bg-white rounded-lg p-8 md:p-12 mb-12 border border-[#E5E5E5] shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-8">
                          Webアプリケーション診断を内製化するメリット
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {[
                            { title: "コスト削減\n柔軟性UP", iconUrl: "https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/icon_1.png" },
                            { title: "対応スピード\n向上", iconUrl: "https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/icon_2.png" },
                            { title: "ノウハウの\n蓄積", iconUrl: "https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/icon_3.png" }
                          ].map((item, i) => (
                            <div key={i} className="text-center">
                              <div className="mb-4 flex justify-center">
                                <Image 
                                  src={item.iconUrl}
                                  alt=""
                                  width={80}
                                  height={80}
                                  className="w-20 h-20 object-contain"
                                  unoptimized
                                />
                              </div>
                              <p className="font-bold text-[#333333] text-lg leading-tight whitespace-pre-line">{item.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-[#666666] leading-relaxed text-lg">
                        使用するツールによっては、専門知識を要するものやデータの整形などの関連作業に人の手を要するものもあるため、いま社内にあるリソースで運用できるかをしっかり見極めましょう。
                      </p>
                    </div>
                  </div>
                </section>
                    
                {/* Concerns Section - White Background */}
                <section className="py-24 bg-white">
                  <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                      {/* 吹き出し画像とアイコン - 元のページと同じ配置 */}
                      <div className="flex flex-col items-center gap-6 mb-8">
                        <div className="relative w-full max-w-2xl">
                          <Image 
                            src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/fukidasi.png" 
                            alt="内製化したいのはやまやまだけど、ツールでのWebアプリケーション診断は精度が懸念…"
                            width={800}
                            height={400}
                            className="w-full h-auto"
                            unoptimized
                          />
                        </div>
                        <div className="relative w-32 h-32">
                          <Image 
                            src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/icon_4.png" 
                            alt=""
                            width={128}
                            height={128}
                            className="w-full h-auto"
                            unoptimized
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-8 leading-tight">
                        「内製化したいのはやまやまだけど、<br/>ツールでのWebアプリケーション診断は精度が懸念…」
                      </h3>
                      <p className="text-[#666666] leading-relaxed text-lg">
                        Webアプリケーション診断の内製化を検討するにあたって、リソースの問題以外に課題となるのが、診断精度です。<br/>
                        特にこれまでベンダーに外注していたケースにおいては、ツールに切り替えることで精度への信頼度が落ちてしまい、なかなか社内の理解を得られないということもよくあります。
                      </p>
                    </div>
                  </div>
                </section>

                {/* AeyeScan Intro */}
                <section className="py-24 bg-[#F8F9FA] border-t border-[#E5E5E5]">
                  <div className="container-custom">
                    <div className="text-center mb-20">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 leading-tight">
                        AeyeScanなら誰でも簡単に<br/>
                        プロさながらの高度な<br/>
                        Webアプリケーション診断を実現
                      </h2>
                      <div className="w-16 h-1 bg-[#002d5a] mx-auto rounded-full mb-8"></div>
                      <p className="text-[#666666] max-w-3xl mx-auto leading-relaxed text-lg">
                        AeyeScanは、高度なAIで診断作業を自動化することで、「誰でも使える簡単さ」と「プロさながらの品質・精度」を両立させた、クラウド型Webアプリケーション脆弱性診断ツールです。<br/>
                        診断業務の内製化を成功へ導き、現場で手軽に診断が行える体制の構築を支援します。
                      </p>
                    </div>

                {/* Authority Section - Simple & Clean */}
                <div className="max-w-4xl mx-auto mb-24">
                     {/* AeyeScan Logo Area - Text Version */}
                     <div className="text-center mb-12">
                        <p className="text-lg md:text-xl font-bold text-[#666666] mb-2 tracking-wider">
                          クラウド型Webアプリケーション脆弱性診断ツール
                        </p>
                        <h3 className="text-5xl md:text-6xl font-black text-[#333333] tracking-tight">
                          AeyeScan
                        </h3>
                     </div>

                     {/* No.1 & 300 Badge */}
                     <div className="mb-12 text-center">
                        <div className="relative w-full max-w-2xl h-28 mx-auto mb-4">
                           <Image
                              src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/emblem.png"
                              alt="国内市場シェアNo.1"
                              fill
                              className="object-contain"
                              unoptimized
                           />
                        </div>
                        <div className="text-[10px] text-[#999999] space-y-1 inline-block text-left">
                            <p>※ 富士キメラ総研調べ「2025 ネットワークセキュリティビジネス調査総覧 市場編」Webアプリケーション脆弱性検査ツール ベンダーシェア（2024年度実績）</p>
                            <p>※ ITR調べ「ITR Market View：サイバー・セキュリティ対策市場2025」SaaS型Webアプリケーション脆弱性管理市場：ベンダー別売上金額シェア（2023年度実績）</p>
                        </div>
                     </div>

                     {/* ITreview Badge */}
                     <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                         <div className="text-center md:text-left">
                             <p className="font-bold text-[#333333] text-lg mb-2">
                               「ITreview Best Software in Japan 2025<span className="text-xs font-normal text-[#666666]">（※1）</span>」にて、<br/>
                               1万3000製品の中から<span className="text-[#FFB629] text-2xl font-black ml-2">AeyeScanが表彰！</span>
                             </p>
                             <p className="text-[10px] text-[#999999] leading-relaxed max-w-md">
                               ※1 2025年5月に発表された、ビジネス向けIT製品・クラウドサービスのレビュープラットフォーム「ITreview」の企画。ユーザーレビュー評価をもとに選出。
                             </p>
                         </div>
                         <div className="relative w-40 h-28 shrink-0">
                           <Image
                              src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/emblem_2.png"
                              alt="ITreview Award"
                              fill
                              className="object-contain"
                              unoptimized
                           />
                        </div>
                     </div>
                </div>

            <div className="text-center mb-16">
              <div className="inline-block bg-[#8FA6B6] border border-[#8FA6B6] rounded-lg px-8 py-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  AeyeScanが選ばれている<br/>
                  <span className="text-white">"</span>理由<span className="text-white">"</span>
                </h2>
              </div>
            </div>

            <div className="space-y-16">
                      {/* Reason 1 */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden">
                        <div className="bg-[#8FA6B6] px-8 py-4">
                          <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-white/70">01</span>
                            <h3 className="text-2xl font-bold text-white">非エンジニアでもOK！３STEPで診断開始</h3>
                          </div>
                        </div>
                        {/* Reason 1 Content */}
                        <div className="p-8 md:p-12 flex flex-col md:flex-row items-start gap-8">
                          <div className="md:w-1/2">
                            <p className="text-[#666666] leading-relaxed text-lg">
                              スタートガイドに従って進めるだけのかんたん導入。そのため、トレーニング不要で、非エンジニアの方でも最短10分で診断を開始することが可能です。<br/><br/>
                              また、AIを用いた自動クローリングによって、テストシナリオを自動で生成するため、面倒なテスト範囲の設定も必要ありません。さらに豊富な機能で、理想の脆弱性診断を実現いたします。
                            </p>
                          </div>
                          <div className="md:w-1/2 pt-2">
                            <Image 
                              src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-1.png" 
                              alt=""
                              width={600}
                              height={400}
                              className="w-full h-auto"
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>

                      {/* Reason 2 */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden">
                        <div className="bg-[#8FA6B6] px-8 py-4">
                          <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-white/70">02</span>
                            <h3 className="text-2xl font-bold text-white">セキュリティのプロも認める安心の診断項目</h3>
                          </div>
                        </div>
                        <div className="p-8 md:p-12">
                          <p className="text-[#666666] leading-relaxed mb-8 text-lg">
                            AeyeScanが提供するのは簡易的な脆弱性診断ではありません。世界的なセキュリティ基準として定評のある、OWASPアプリケーションセキュリティ検証標準に沿った診断項目に対応。<br/><br/>
                            随時アップデートを行うことで最新のセキュリティ状況を反映し、本格的な脆弱性診断を提供しています。このことから、多くのセキュリティベンダーにも活用いただいています。
                          </p>
                          <div className="mb-10 flex justify-center">
                             <Image 
                               src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-2.png" 
                               alt=""
                               width={800}
                               height={400}
                               className="w-full max-w-2xl h-auto"
                               unoptimized
                             />
                          </div>
                          <div className="bg-[#F8F9FA] p-6 rounded-lg border border-[#EEEEEE] text-[#333333]">
                            <p className="font-bold mb-4 text-[#FFB629] text-lg">ここがポイント</p>
                            <ul className="space-y-4">
                              <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#FFB629] shrink-0 mt-0.5 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <div className="flex-1 flex items-start gap-4">
                                  <span className="flex-1 text-[#333333] leading-relaxed">経済産業省が策定した「情報セキュリティサービス基準」に適合している脆弱性診断サービスとして、AeyeScanが「情報セキュリティサービス台帳」に登録</span>
                                  <Image 
                                    src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-3.png" 
                                    alt=""
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 shrink-0 object-contain"
                                    unoptimized
                                  />
                                </div>
                              </li>
                              <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#FFB629] shrink-0 mt-0.5 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <span className="flex-1 text-[#333333] leading-relaxed">独立行政法人情報処理推進機構（IPA）2021年度 セキュリティ製品の有効性検証において、有識者会議による審査の結果、AeyeScanが選定</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Reason 3 */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden">
                        <div className="bg-[#8FA6B6] px-8 py-4">
                          <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-white/70">03</span>
                            <h3 className="text-2xl font-bold text-white">専門家作成と遜色ないレポートを自動生成</h3>
                          </div>
                        </div>
                        <div className="p-8 md:p-12">
                          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            <div className="md:w-1/2">
                               <p className="text-[#666666] leading-relaxed text-lg">
                                 当然ながらセキュリティ対策は、脆弱性診断だけでは終わりません。発見された脆弱性のある箇所に対して、適切な対策が求められます。<br/>
                                 AeyeScanでは、脆弱性のある箇所をただ羅列するだけではなく、どういったリスクがあるのか、どういった対策が必要であるのかなど、専門家が作成するものと遜色ない診断レポートを自動で生成。<br/>
                                 そのまま開発部門に渡せる内容を網羅しているため、担当者によるレポート作成業務が不要です。
                               </p>
                            </div>
                            <div className="md:w-1/2">
                               <Image 
                                 src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-4.png" 
                                 alt="日本語でわかりやすい！充実のレポート内容"
                                 width={600}
                                 height={400}
                                 className="w-full h-auto"
                                 unoptimized
                               />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            <div className="relative w-full max-w-[180px] mx-auto">
                              <Image 
                                src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-5.png" 
                                alt="初めての脆弱性診断に"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                                unoptimized
                              />
                            </div>
                            <div className="relative w-full max-w-[180px] mx-auto">
                              <Image 
                                src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-6.png" 
                                alt="専任者選定もエンジニアの採用も不要"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                                unoptimized
                              />
                            </div>
                            <div className="relative w-full max-w-[180px] mx-auto">
                              <Image 
                                src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-7.png" 
                                alt="事前設定不要最短10分で診断開始"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                                unoptimized
                              />
                            </div>
                            <div className="relative w-full max-w-[180px] mx-auto">
                              <Image 
                                src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/img_1-8.png" 
                                alt="わかりやすいレポート"
                                width={300}
                                height={300}
                                className="w-full h-auto"
                                unoptimized
                              />
                            </div>
                          </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Introduction Case Section (Copied from Reference LP) */}
                <section className="py-24 bg-white">
                  <div className="container-custom">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 leading-tight">
                        AeyeScanを導入し、<br className="md:hidden"/>多くの企業が<br/>
                        <span className="text-[#002d5a]">脆弱性診断の内製化<br className="md:hidden"/>に成功</span>しています
                      </h2>
                      <div className="w-16 h-1 bg-[#002d5a] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Case 1: eplus */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_1.png" alt="イープラス" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            公的機関が認めたツール導入で、<span className="text-[#FFB629]">診断業務を一人で完結</span>チケット販売サイトなどに定期診断を実現
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">株式会社イープラス</p>
                           <p className="text-[10px] text-[#666666] mb-1">システム部統括部長</p>
                           <p className="text-xs text-[#333333]">尾崎様</p>
                        </div>
                      </div>

                      {/* Case 2: NTT East */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_2.png" alt="NTT EAST" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            <span className="text-[#FFB629]">NTTのセキュリティ基準</span>を満たしながら、アジャイル方式のスピード感のあるサービス開発が可能に
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">NTT東日本株式会社</p>
                           <p className="text-[10px] text-[#666666] mb-1">ビジネス開発本部CXビジネス部</p>
                           <p className="text-xs text-[#333333]">小林様</p>
                        </div>
                      </div>

                      {/* Case 3: CAPCOM */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_3.png" alt="CAPCOM" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            技術者以外でも使えるAeyeScanで現場主導の高頻度な診断を実現。<span className="text-[#FFB629]">診断工数1/10</span>で叶える理想のWebセキュリティ
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">株式会社カプコン</p>
                           <p className="text-[10px] text-[#666666] mb-1">WEBプロダクション室 WEBマネジメントチーム</p>
                           <p className="text-xs text-[#333333]">梅村様</p>
                        </div>
                      </div>

                      {/* Case 4: GEO */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_4.png" alt="GEO" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            <span className="text-[#FFB629]">事業成長スピードを止めずに品質保証</span>、開発現場主導のセキュリティ診断体制を確立
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">株式会社ゲオホールディングス</p>
                           <p className="text-[10px] text-[#666666] mb-1">グローバルシステム管理部 情報セキュリティ課</p>
                           <p className="text-xs text-[#333333]">ご担当者様</p>
                        </div>
                      </div>

                      {/* Case 5: Suzuyo */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_5.png" alt="Suzuyo" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            <span className="text-[#FFB629]">内製化により約3割の診断コストを削減</span>しながら、物流システムを支えるセキュリティのレベルアップを実現
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">鈴与株式会社</p>
                           <p className="text-[10px] text-[#666666] mb-1">情報システム室 システム開発チーム</p>
                           <p className="text-xs text-[#333333]">チームリーダー 渡邉様</p>
                        </div>
                      </div>

                      {/* Case 6: Dentsu Soken */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_6.png" alt="電通総研" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            検査準備の効率化により<span className="text-[#FFB629]">人的リソースを再配分</span>、セキュリティ体制のさらなる強化へ
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">株式会社電通総研</p>
                           <p className="text-[10px] text-[#666666] mb-1">コーポレート本部 サイバーセキュリティ推進部<br/>セキュアシステムデザイングループ エンジニア</p>
                           <p className="text-xs text-[#333333]">小笠原様</p>
                        </div>
                      </div>

                      {/* Case 7: HITOWA */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_7.png" alt="HITOWA" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            複数事業を展開する中、<span className="text-[#FFB629]">現場主導の診断体制</span>とセキュリティリスクの可視化を実現
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">HITOWAホールディングス株式会社</p>
                           <p className="text-[10px] text-[#666666] mb-1">情報システム部 次長</p>
                           <p className="text-xs text-[#333333]">田中様</p>
                        </div>
                      </div>

                      {/* Case 8: Money Forward */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_8.png" alt="Money Forward" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            金融プロダクト<span className="text-[#FFB629]">すべてに、定期的な脆弱性診断の運用</span>を実現
                          </p>
                        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">株式会社マネーフォワード</p>
                           <p className="text-[10px] text-[#666666] mb-1">CISO室プロダクトセキュリティ部<br/>セキュリティエンジニア</p>
                           <p className="text-xs text-[#333333]">中川様</p>
                        </div>
                      </div>

                      {/* Case 9: MIZUNO */}
                      <div className="bg-white rounded-lg border border-[#EEEEEE] overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow border-b border-[#EEEEEE] border-dashed">
                          <div className="mb-4 h-8 relative w-32">
                             <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/lp06/logo_9.png" alt="MIZUNO" fill className="object-contain object-left" unoptimized />
                          </div>
                          <p className="text-sm text-[#333333] leading-relaxed font-bold">
                            拡大し続けるWebサイトのセキュリティを<span className="text-[#FFB629]">AeyeScanによる診断で継続的に担保</span>
          </p>
        </div>
                        <div className="p-4 bg-[#FDFDFD]">
                           <p className="text-xs font-bold text-[#333333] mb-1">美津濃株式会社</p>
                           <p className="text-[10px] text-[#666666] mb-1">グローバルデジタルDTC統括本部 　グローバルITデジタル推進室 ICTソリューション課課長</p>
                           <p className="text-xs text-[#333333]">松浦様</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Banner Section */}
                <section className="py-20 bg-white">
                  <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                      <Link href="https://www.aeyescan.jp/form/demo-scan/" className="block group">
                        <div className="relative w-full rounded-xl overflow-hidden transition-all hover:shadow-xl hover:scale-[1.01]">
                          <picture>
                            <source 
                              type="image/webp" 
                              srcSet="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/banner_06_pc_@2x.webp" 
                              media="(min-width: 768px)" 
                            />
                            <source 
                              srcSet="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/banner_06_pc_@2x.png" 
                              media="(min-width: 768px)" 
                            />
                            <source 
                              type="image/webp" 
                              srcSet="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/banner_06_sp_@2x.webp" 
                            />
            <Image
                              src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/web_application/banner_06_sp_@2x.png"
                              alt="Webセキュリティ診断の内製化、その第一歩にAeyeScanを"
                              width={1200}
                              height={400}
                              className="w-full h-auto object-contain rounded-xl"
                              unoptimized
                            />
                          </picture>
                        </div>
                      </Link>
                    </div>
        </div>
                </section>
      </main>

      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <Button variant="ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-slate-300 hover:text-[#FFB629] block mb-2">
              PAGE TOP
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-slate-700 pt-12">
            <div className="flex flex-col gap-6">
              <div className="relative w-36 h-10">
                 <Image
                  src="https://www.aeyescan.jp/wp-content/uploads/2024/02/logo.png"
                  alt="AeyeScan"
                  fill
                  className="object-contain invert"
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <Link href="#" className="hover:text-[#FFB629]">運営会社</Link>
                <Link href="#" className="hover:text-[#FFB629]">コーポレートニュース</Link>
                <Link href="#" className="hover:text-[#FFB629]">情報セキュリティ方針</Link>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="text-sm font-bold text-slate-300">OFFICIAL SNS</div>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/icon_sns_fb.webp" alt="Facebook" width={20} height={20} unoptimized />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/icon_sns_x.webp" alt="X" width={20} height={20} unoptimized />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <Image src="https://www.aeyescan.jp/wp-content/themes/cocoon-child-master/images/icon_sns_in.webp" alt="LinkedIn" width={20} height={20} unoptimized />
                </Link>
              </div>
              <p className="text-xs text-slate-500 text-right leading-relaxed">
                © 2025 Aeye Security Lab Inc. All Rights Reserved.<br/>
                「AeyeScan」の名称およびロゴは、株式会社エーアイセキュリティラボの登録商標です。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


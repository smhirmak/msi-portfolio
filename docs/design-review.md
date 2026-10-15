# Tasarım ve SEO incelemesi — 15 Ekim 2026

## Uygulanan düzeltmeler

- Proje kartlarının bağlantıları, açıklama uzunluğundan bağımsız olarak satırın altına hizalandı.
- Proje kartlarının hareketli vurgusu klavye odağında da etkinleşiyor; odak karttan ayrılınca kapanıyor. Azaltılmış hareket tercihi korunuyor.
- İngilizce ve Türkçe sayfalara görünür içerikle uyumlu `ProfilePage` / `Person` JSON-LD verisi eklendi. Kanonik URL ve dil bilgisi her sayfaya göre üretiliyor; sosyal profiller kişiyle ilişkilendiriliyor.
- Twitter görsel alternatif metni ve tarayıcı tema rengi eklendi.
- Deneyim alt başlıklarına yerleşik JavaScript `Date` ile hesaplanan Türkçe/İngilizce süreler eklendi. Devam eden işin süresi sayfa açıldığında güncelleniyor; tamamlanan işin süresi sabit tarihlerden hesaplanıyor. Ek paket kullanılmadı.
- Alt başlığın mobil grid düzenini bozması ve masaüstünde tarih ile üst üste yapışması giderildi.

Yapılandırılmış veri referansı: [Google Search Central: ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

## Doğrulama

- TypeScript ve ESLint başarılı; 13 birim testi geçti.
- 24 Playwright testi geçti. Son süre hesaplama değişikliğinin ardından ilgili 6 masaüstü/mobil zaman çizgisi ve SEO regresyon testi ayrıca geçti.
- JavaScript kapalıyken her iki dilde başlık, canonical, hreflang ve JSON-LD doğrulandı.
- Menü, dil değişimi, anchor konumu, form doğrulama, başarı/hata durumları, PDF, hover, typewriter, hareketli kenarlık ve zaman çizgileri kontrol edildi.
- Otomatik WCAG A/AA kontrolünde ihlal bulunmadı.
- 320, 375, 768, 1024, 1280 ve 1440 px genişliklerinde sayfa ve navigasyon taşması bulunmadı.
- Masaüstü ve dar mobil ekran görüntüleri incelendi. Bölümler kaydırılıp lazy-load görselleri yüklendiğinde kırık görsel veya JavaScript çalışma zamanı hatası bulunmadı.

Deneyim sürelerinin eklenmesinden önce alınan yerel production Lighthouse ölçümü:

| Ölçüm | Mobil | Masaüstü |
| --- | --- | --- |
| Performans | 100 | 100 |
| Erişilebilirlik | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| LCP | 1,4 sn | 0,7 sn |
| CLS | 0 | 0,011 |
| TBT | 0 ms | 0 ms |

Raporlar `artifacts/lighthouse-mobile.html` ve `artifacts/lighthouse-desktop.html` içinde; bu klasör Git dışında tutuluyor.

## Sınırlar

- Turbopack derlemesi bu çalışma ortamında alt süreç port izni (`EPERM`) nedeniyle tamamlanamadı. `npm run build -- --webpack` başarılı oldu; varsayılan build komutu değiştirilmedi.
- CAPTCHA ve EmailJS başarı/hata akışları testlerde taklit edildi; gerçek e-posta gönderilmedi.
- Lighthouse değerleri yerel laboratuvar sonuçlarıdır. Canlı alan adının indekslenmesi, gerçek kullanıcı performansı ve arama sıralaması bu incelemede doğrulanmadı.
- Otomatik erişilebilirlik kontrolleri tam manuel ekran okuyucu denetimi yerine geçmez.

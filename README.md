# FridayAPI
FridayAI API 

**How can I use This AI ?**

-You have to get API Key by developer . To do that you have to mail your reason to infofridayapp@gmail.com

You can try AI on  

[Click me !](https://console.dialogflow.com/api-client/demo/embedded/fridayai "Try FridayAI")



**Headers:**
				

**API KULLANICI TEST ETME**

/check
	/apikey/**API KEY**

	
Cevaplar

	
	        Status      'İşlem Hakkında Bilgi'
		Gisim       'Kullanıcı İsmi'
		signDate    'Kullanıcı Kayıt olduğu tarih'
		discordid   'Kullanıcı Discord İd'si'
		Mail 	    'Kullanıcı Mail Adresi'
		apiKey 	    'Kullanıcı API KEY'
	 
Sunucu Cevap		 **Cevapdan Sonra Gelir**
			
		Type   		'Sunucu işlem girdisi'
		cloudDate 	'Sunucu tarih saat ve saniyesi'
		Case		'İşlem numarası ' ** HATA BİLDİRİMİ İÇİN KULLANILIR **
		Version 	'Sunucu Versiyon'			
			
-

**HAVA DURUMU**

/apikey/${i.apisign} **BELİRLİ OLAN APİ KEY**
			/hava/**KONUM**

Cevaplar 

-Boş veya hatalı yazım

Cevaplar
				
		       Status 'Hata ismi'
		
-		

-Bilgi			

		        Status      		'İşlem Hakkında Bilgi'
			Konum			'Belirtilen konum'
			Zamand			'Zaman dilimi'
			Derece			'Belirtilen konum derece bilgisi'
			Hissedilen 		'Belirtilen konum hissedilen sıcaklık bilgisi'
			Rüzgar     		'Belirtilen konum rüzgar bilgisi'
			Nem			'Belirtilen konum nem bilgisi'

-

**YAPAY ZEKA**

/apikey/${i.apisign} **BELİRLİ OLAN APİ KEY**
			/msg/**MESAJ**
		
Cevaplar 

-Boş veya hatalı yazım

Cevaplar
				
		   	Status 'Hata ismi'
		
-	
	
-Bilgi
	
			Status			'İşlem Hakkında Bilgi',
			YourMessage		'Sizin mesajınız' 
			FridayAI		'Friday'ın mesajı'
	
-



Cevaplar Sonrası (Global Header Server Durumu) **CHECK İŞLEMİ DIŞINDA HER İŞLEMDEN SONRA BULUNUR**
		
		
	        Kullanıcı       'Kullanıcı İsmi'
	        Yourapi         'Kullanıcı API Key'i'
		Mail 		'Kullanıcı Mail Adresi'
		Disid 		'Kullanıcı Discord ID'si'
		kytarih		'Kullanıcı Kayıt olduğu tarih' 
		Type   		'Sunucu işlem girdisi'
		cloudDate 	'Sunucu tarih saat ve saniyesi'
		Case		'İşlem numarası ' ** HATA BİLDİRİMİ İÇİN KULLANILIR **
		Version 	'Sunucu Versiyon'			
-	

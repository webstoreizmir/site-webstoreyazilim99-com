// src/utils/images.ts

// Elle seçilmiş, yüksek kaliteli, ASLA silinmeyecek Unsplash ID'leri
const stockImages = {
    // İnşaat, Mimarlık, Emlak
    architecture: [
        "https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?auto=format&fit=crop&w=1920&q=80", // Lüks Villa Havuzlu
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80", // Modern İç Mekan
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80", // Modern Villa
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"  // Beyaz Villa
    ],
    // Kafe, Restoran, Yemek
    food: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80", // Şık Kafe
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80", // Barista
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80", // Restoran İç Mekan
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80"  // Kahve Masası
    ],
    // Teknoloji, Yazılım, Web Tasarım
    tech: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80", // Developer Workspace
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80", // Coding Laptop
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80", // Designer Workspace
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80"  // Web Design
    ],
    // Sağlık
    health: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80", // Hastane
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"  // Klinik
    ],
    // Spor, Fitness
    fitness: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80", // Gym Equipment
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1920&q=80", // Fitness Training
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80"  // Gym Interior
    ],
    // Kuaför, Güzellik
    beauty: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80", // Hair Salon
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=80", // Spa Treatment
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80"  // Beauty Salon
    ],
    // Eğitim
    education: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80", // Classroom
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80", // Library
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"  // Study
    ],
    // Genel İş
    business: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80", // Ofis
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"  // Gökdelen
    ]
};

export function getSmartImage(keyword: string): string {
    const key = keyword.toLowerCase();

    // İnşaat, Mimarlık, Emlak
    if (key.includes('villa') || key.includes('ev') || key.includes('mimari') || key.includes('inşaat') || key.includes('dekorasyon') || key.includes('interior') || key.includes('architecture') || key.includes('yapı') || key.includes('house') || key.includes('building')) {
        return stockImages.architecture[Math.floor(Math.random() * stockImages.architecture.length)];
    }

    // Kafe, Restoran, Yemek
    if (key.includes('kahve') || key.includes('kafe') || key.includes('cafe') || key.includes('coffee') || key.includes('yemek') || key.includes('restoran') || key.includes('restaurant') || key.includes('gıda') || key.includes('mutfak') || key.includes('barista') || key.includes('food')) {
        return stockImages.food[Math.floor(Math.random() * stockImages.food.length)];
    }

    // Teknoloji, Yazılım, Web Tasarım
    if (key.includes('yazılım') || key.includes('teknoloji') || key.includes('dijital') || key.includes('bilgisayar') || key.includes('kod') || key.includes('web') || key.includes('tasarım') || key.includes('design') || key.includes('developer') || key.includes('programming') || key.includes('coding') || key.includes('software') || key.includes('tech') || key.includes('digital') || key.includes('workspace')) {
        return stockImages.tech[Math.floor(Math.random() * stockImages.tech.length)];
    }

    // Sağlık
    if (key.includes('sağlık') || key.includes('diş') || key.includes('doktor') || key.includes('klinik') || key.includes('estetik') || key.includes('health') || key.includes('medical') || key.includes('hospital') || key.includes('doctor')) {
        return stockImages.health[Math.floor(Math.random() * stockImages.health.length)];
    }

    // Spor, Fitness
    if (key.includes('spor') || key.includes('fitness') || key.includes('gym') || key.includes('antrenman') || key.includes('workout') || key.includes('training') || key.includes('egzersiz') || key.includes('pilates') || key.includes('yoga')) {
        return stockImages.fitness[Math.floor(Math.random() * stockImages.fitness.length)];
    }

    // Kuaför, Güzellik
    if (key.includes('kuaför') || key.includes('güzellik') || key.includes('berber') || key.includes('saç') || key.includes('beauty') || key.includes('salon') || key.includes('hair') || key.includes('spa') || key.includes('makyaj') || key.includes('makeup')) {
        return stockImages.beauty[Math.floor(Math.random() * stockImages.beauty.length)];
    }

    // Eğitim
    if (key.includes('eğitim') || key.includes('okul') || key.includes('kurs') || key.includes('öğrenci') || key.includes('education') || key.includes('school') || key.includes('learn') || key.includes('study') || key.includes('training')) {
        return stockImages.education[Math.floor(Math.random() * stockImages.education.length)];
    }

    // Varsayılan
    return stockImages.business[Math.floor(Math.random() * stockImages.business.length)];
}

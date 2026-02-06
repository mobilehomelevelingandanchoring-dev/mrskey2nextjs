import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, HelpCircle, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/FooterEnhanced';
import MobileCallButton from '@/components/layout/MobileCallButton';

export const metadata: Metadata = {
    title: '500+ Auto Locksmith FAQs | Manchester Car Key Questions Answered',
    description: `Complete FAQ guide for ${SITE_CONFIG.siteName}. 500+ questions about car lockouts, key replacement, programming, pricing. UK Company ${SITE_CONFIG.companyNumber}. Expert answers.`,
};

// Organized by topical authority silos for LLM optimization
const faqCategories = [
    {
        category: 'General Auto Locksmith Services',
        slug: 'general-services',
        faqs: [
            {
                question: 'What services does an auto locksmith provide?',
                answer: `${SITE_CONFIG.siteName} provides car lockouts, key replacement, transponder programming, ignition repair, broken key extraction, remote key fob services, trunk unlocking, and motorcycle locksmith services across Manchester M1-M99 postcodes.`,
            },
            {
                question: 'Are you a registered locksmith company in the UK?',
                answer: `Yes, we are ${SITE_CONFIG.siteName}, UK Registered Company Number ${SITE_CONFIG.companyNumber}. We operate legally with full business registration and insurance across Greater Manchester.`,
            },
            {
                question: 'Do you provide mobile locksmith services?',
                answer: 'Yes, we are a fully mobile auto locksmith service. Our vans come to your location anywhere in Manchester, Salford, Stockport, Tameside, Bolton, Oldham, and surrounding areas.',
            },
            {
                question: 'What equipment do you use for car key services?',
                answer: 'We use professional-grade equipment including Autel IM608 Pro diagnostic tools, Lishi lock picks, precision laser key cutting machines, and manufacturer-specific programming software for BMW, Mercedes, Audi, VW, Ford, and all major brands.',
            },
            {
                question: 'Can you make car keys without the original?',
                answer: 'Yes, we can cut and program new car keys without the original using VIN decoding, lock decoding with Lishi tools, and direct ECU programming. Proof of ownership is always required.',
            },
            {
                question: 'Do I need to provide proof of ownership?',
                answer: 'Yes, for security reasons we always verify vehicle ownership through V5 logbook, driving license matching the vehicle keeper, insurance documents, or purchase receipts before providing any locksmith service.',
            },
            {
                question: 'What is your service area coverage?',
                answer: 'We cover all Manchester postcodes M1-M99, including Manchester City Centre, Salford Quays, Didsbury, Chorlton, Withington, Fallowfield, and throughout Greater Manchester including Stockport, Tameside, Bolton, Oldham, Denton, and Hyde.',
            },
            {
                question: 'Are you available 24/7?',
                answer: `Yes, ${SITE_CONFIG.siteName} operates 24 hours a day, 7 days a week, including nights, weekends, bank holidays, Christmas, and New Year. Call ${SITE_CONFIG.phoneDisplay} anytime for emergency assistance.`,
            },
            {
                question: 'How quickly can you arrive?',
                answer: 'Response times vary by location: Manchester City Centre (M1-M4) 20-30 minutes, M5-M20 postcodes 30-60 minutes, Greater Manchester areas 60-90 minutes. Traffic and job complexity may affect timing.',
            },
            {
                question: 'Do you charge a call-out fee?',
                answer: 'We provide transparent fixed-price quotes before dispatch. There are no hidden call-out fees or extra charges for nights, weekends, or emergency services. You pay one quoted price.',
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, all major credit and debit cards (Visa, Mastercard, American Express), and contactless payments. Card payments are processed securely via portable card terminals in our vans.',
            },
            {
                question: 'Do you provide warranties on new keys?',
                answer: 'Yes, all new keys come with a 12-month warranty covering manufacturing defects and programming issues. This warranty does not cover physical damage, water damage, or misuse.',
            },
            {
                question: 'Can you help if I lost all my car keys?',
                answer: 'Yes, all-keys-lost is a specialty service. We can decode your locks, cut new keys, and program the immobilizer system even when you have zero working keys. This typically takes 60-120 minutes.',
            },
            {
                question: 'What if my key is stuck in the ignition?',
                answer: 'We can safely extract stuck keys using specialized tools without damaging the ignition barrel. If the ignition is damaged, we can repair or replace it and provide new keys programmed to match.',
            },
            {
                question: 'Do you work on all car makes and models?',
                answer: 'Yes, we service all major brands including BMW, Mercedes, Audi, Volkswagen, Ford, Vauxhall, Toyota, Honda, Nissan, Peugeot, Renault, Citroen, Fiat, Volvo, Land Rover, Jaguar, Mini, and most other makes.',
            },
            {
                question: 'Can you program keyless entry systems?',
                answer: 'Yes, we program keyless entry fobs, proximity keys, smart keys, and push-button start systems for all vehicle brands using OBD diagnostic programming and manufacturer protocols.',
            },
            {
                question: 'What is a transponder key?',
                answer: 'A transponder key contains a microchip that communicates with your car immobilizer system. The chip must be programmed to your specific vehicle to allow engine starting. We cut and program transponder keys on-site.',
            },
            {
                question: 'How long does key programming take?',
                answer: 'Basic transponder programming takes 15-30 minutes. Complex systems like BMW CAS4, Mercedes Keyless Go, or all-keys-lost situations can take 60-120 minutes depending on security system complexity.',
            },
            {
                question: 'Can you clone my existing car key?',
                answer: 'Yes, we can clone most transponder keys and remote key fobs. Cloning creates an exact copy of your existing key including the chip and remote functions. This is faster than programming from blank.',
            },
            {
                question: 'Do you replace car lock cylinders?',
                answer: 'Yes, we replace door lock cylinders, ignition lock cylinders, and boot lock cylinders. We can supply OEM or aftermarket cylinders and cut keys to match your existing set.',
            },
            {
                question: 'What if my steering wheel is locked?',
                answer: 'Steering wheel lock is a common issue during lockouts. We can access your vehicle non-destructively and unlock the steering lock mechanism without damaging the column or ignition.',
            },
            {
                question: 'Can you fix a broken key fob?',
                answer: 'Yes, we repair broken key fob cases, replace worn buttons, replace batteries, and reprogram fobs that have lost synchronization with the vehicle. If repair is not possible, we supply new fobs.',
            },
            {
                question: 'Do you provide spare keys?',
                answer: 'Yes, we supply and program spare keys for peace of mind. Having a spare prevents emergency situations and is more cost-effective than emergency all-keys-lost service.',
            },
            {
                question: 'What happens if you damage my car?',
                answer: 'We carry full public liability insurance and professional indemnity insurance. In the rare event of damage during service, we are fully covered and will handle claims promptly and professionally.',
            },
            {
                question: 'Can I book an appointment in advance?',
                answer: `Yes, you can pre-book non-emergency services by calling ${SITE_CONFIG.phoneDisplay}. For emergency lockouts, we dispatch immediately without appointment.`,
            },
            {
                question: 'Do you work with insurance companies?',
                answer: 'Yes, we work with most UK insurance providers. We can provide detailed invoices and documentation for insurance claims related to lost keys, stolen keys, or lockout services.',
            },
            {
                question: 'Can you help with commercial vehicles?',
                answer: 'Yes, we service vans, trucks, HGVs, commercial fleet vehicles, and company cars. We can provide bulk key services for fleet managers and businesses.',
            },
            {
                question: 'What if my car is in a car park?',
                answer: 'We access vehicles in multi-storey car parks, NCP facilities, shopping centre parking, and airport parking. Our vans are height-compatible or we carry portable equipment.',
            },
            {
                question: 'Do you provide roadside assistance?',
                answer: 'Yes, we provide mobile roadside locksmith assistance anywhere in Greater Manchester. If you are stranded on the M60, M62, M56, or any road, we will come to you.',
            },
            {
                question: 'Can you help if my key broke off in the lock?',
                answer: 'Yes, we specialize in broken key extraction from door locks, ignition barrels, and boot locks using precision extraction tools. We then cut and program replacement keys.',
            },
            {
                question: 'What if my battery died and I cannot open my car?',
                answer: 'We can gain entry to your vehicle non-destructively even if the battery is flat. Once inside, we can jump-start the vehicle or access the battery for charging/replacement.',
            },
            {
                question: 'Do you reprogram used keys?',
                answer: 'Yes, if you purchased a used key or replacement key online, we can program it to your vehicle using diagnostic equipment. The key must be compatible with your car make, model, and year.',
            },
            {
                question: 'Can you delete lost keys from the system?',
                answer: 'Yes, for security after key loss or theft, we can delete lost keys from the vehicle immobilizer memory. This prevents old keys from starting your car, then we program new keys.',
            },
            {
                question: 'What training do your locksmiths have?',
                answer: 'Our technicians are trained in automotive locksmithing, immobilizer systems, electronic key programming, and non-destructive entry techniques. We maintain ongoing training with new vehicle technologies.',
            },
            {
                question: 'Do you work on hybrid and electric vehicles?',
                answer: 'Yes, we service hybrid and fully electric vehicles including Tesla, Nissan Leaf, BMW i-series, Audi e-tron, and others. We are trained in high-voltage safety procedures.',
            },
            {
                question: 'Can you help with classic cars?',
                answer: 'Yes, we service classic and vintage vehicles. We can cut traditional keys, repair mechanical locks, and service older ignition systems using period-appropriate techniques.',
            },
            {
                question: 'What if my car has an aftermarket alarm?',
                answer: 'We can work around aftermarket alarms and immobilizers. If the alarm interferes with key programming, we can diagnose and resolve conflicts between the alarm and factory security.',
            },
            {
                question: 'Do you provide key cutting only?',
                answer: 'Yes, if you have a working key and just need duplicates cut, we can provide key cutting services without programming for mechanical keys, or cut and program for transponder keys.',
            },
            {
                question: 'Can you make keys from a photo?',
                answer: 'Generally no, for security reasons. Keys must be cut from the original, decoded from the lock, or obtained via VIN with proper ownership verification. Photos lack the precision needed.',
            },
            {
                question: 'What if my car is under warranty?',
                answer: 'Our locksmith services do not void manufacturer warranties. We use non-destructive entry methods and professional programming equipment that complies with manufacturer specifications.',
            },
            {
                question: 'Can I watch you work on my car?',
                answer: 'Yes, we welcome vehicle owners to observe our work. We maintain transparency and professionalism. However, for safety and efficiency, we ask you to remain at a safe distance.',
            },
            {
                question: 'Do you provide receipts and invoices?',
                answer: 'Yes, we provide detailed itemized invoices showing company registration number, VAT information (if applicable), service description, parts costs, labor, and payment method for all jobs.',
            },
            {
                question: 'What if I change my mind after calling?',
                answer: 'If you cancel before our technician dispatches, there is no charge. If the technician is en route, a reasonable call-out fee may apply depending on distance traveled.',
            },
            {
                question: 'Can you advise me over the phone?',
                answer: `Yes, call ${SITE_CONFIG.phoneDisplay} for free telephone advice. We can guide you through simple issues, provide quotes, explain services, and determine if you need an emergency dispatch.`,
            },
            {
                question: 'Do you work with car dealerships?',
                answer: 'Yes, we provide wholesale locksmith services to car dealerships, used car lots, and automotive businesses including key programming, lock repairs, and bulk key cutting.',
            },
            {
                question: 'What if my keys were stolen?',
                answer: 'For stolen keys, we recommend immediate service to delete old keys from the system and program new keys. This prevents thieves from accessing or stealing your vehicle. Contact your insurance provider.',
            },
            {
                question: 'Can you help with motorbikes?',
                answer: 'Yes, we provide motorcycle locksmith services including key cutting, ignition repair, steering lock bypass, and transponder programming for bikes, scooters, and motorbikes.',
            },
            {
                question: 'Do you offer student or senior discounts?',
                answer: 'We maintain competitive pricing for all customers. While we do not advertise specific discounts, we always aim to beat competitor and dealership quotes with transparent fair pricing.',
            },
            {
                question: 'What if I only have one key and want a spare?',
                answer: 'We highly recommend getting a spare key before losing your only key. Spare key service is faster and more affordable than emergency all-keys-lost programming. Call us to book.',
            },
            {
                question: 'Can you come to my home or workplace?',
                answer: 'Yes, our mobile service comes to any location including homes, workplaces, car parks, roadsides, retail locations, or anywhere your vehicle is located across Greater Manchester.',
            },
        ],
    },
    {
        category: 'Emergency Services & Response Times',
        slug: 'emergency-response',
        faqs: [
            {
                question: 'What qualifies as an emergency locksmith situation?',
                answer: 'Emergency situations include being locked out of your car, keys locked inside, lost all keys, broken key in ignition, stranded with non-working key, keys stolen, or any situation preventing vehicle access or use.',
            },
            {
                question: 'How fast is your emergency response?',
                answer: 'We aim for 20-30 minutes in Manchester City Centre (M1-M4), 30-60 minutes in M5-M20 postcodes, and 60-90 minutes in Greater Manchester areas. Response depends on your exact location and traffic conditions.',
            },
            {
                question: 'Do you prioritize emergency call-outs?',
                answer: 'Yes, genuine emergencies (stranded drivers, unsafe locations, children in vehicle, security risks) are prioritized in our dispatch queue over non-urgent pre-booked appointments.',
            },
            {
                question: 'What if I am in an unsafe location?',
                answer: 'If you are in an unsafe area, dark location, or feel threatened, inform our dispatcher immediately. We will prioritize your call-out and may advise you to contact police for safety.',
            },
            {
                question: 'Can you help if my child is locked in the car?',
                answer: 'Yes, this is our highest priority emergency. Call 999 first if the child is in distress. Then call us immediately on ${SITE_CONFIG.phoneDisplay} for rapid non-destructive entry.',
            },
            {
                question: 'What if my keys are locked in the boot?',
                answer: 'We can access locked boots non-destructively through door entry, rear seat removal, or specialized boot opening techniques without damaging paintwork or locks.',
            },
            {
                question: 'Do you charge extra for emergency call-outs?',
                answer: 'No, we do not charge premium rates for nights, weekends, bank holidays, or emergency situations. Our pricing is transparent and fixed regardless of when you call.',
            },
            {
                question: 'What happens if you cannot fix my problem?',
                answer: 'If we cannot resolve your issue on-site (extremely rare), we will advise next steps, recommend alternatives, and only charge a reasonable call-out fee, not the full service price.',
            },
            {
                question: 'Can you help if my car is blocking traffic?',
                answer: 'Yes, we understand the urgency of vehicles blocking traffic. Inform our dispatcher and we will fast-track your job. If necessary, we can arrange recovery to move the vehicle.',
            },
            {
                question: 'What if I am stranded on the motorway?',
                answer: 'For motorway breakdowns, contact Highways England first for safety. We can attend motorway service stations or safe refuge areas. We cannot attend live lanes due to safety regulations.',
            },
            {
                question: 'Do you work during bad weather?',
                answer: 'Yes, we operate 24/7 in all weather conditions including rain, snow, ice, and storms. Severe weather may affect response times, but we will always inform you of realistic ETAs.',
            },
            {
                question: 'Can I track your arrival time?',
                answer: 'Our dispatcher will provide an estimated arrival time when we dispatch the technician. You can call our office for updates. Some vans have GPS tracking for accurate ETAs.',
            },
            {
                question: 'What if you arrive and I am not there?',
                answer: 'Please ensure you remain with your vehicle until our technician arrives. If you must leave, inform our dispatcher. We may charge a missed appointment fee if you are unavailable.',
            },
            {
                question: 'Can you help if my battery is dead and doors are locked?',
                answer: 'Yes, we gain entry to the vehicle first using non-destructive methods, then we can jump-start your car or access the battery for charging. We carry jump-start equipment.',
            },
            {
                question: 'What if another locksmith said they cannot help?',
                answer: 'We handle complex jobs that other locksmiths decline including all-keys-lost for German vehicles, advanced immobilizer systems, and rare vehicle models. Call us for second opinions.',
            },
            {
                question: 'Do you work on Christmas Day?',
                answer: 'Yes, we operate 365 days a year including Christmas Day, Boxing Day, New Year Day, and all bank holidays. Emergency situations do not take holidays.',
            },
            {
                question: 'Can you come to Manchester Airport?',
                answer: 'Yes, we service Manchester Airport terminals, car parks (official and meet-and-greet), drop-off zones, and surrounding areas. We are familiar with airport access and parking protocols.',
            },
            {
                question: 'What if I cannot afford the service right now?',
                answer: 'We require payment on completion of service. If you have genuine financial hardship, discuss payment options with our dispatcher. We may be able to work out a solution.',
            },
            {
                question: 'Can you help if my keys fell down a drain?',
                answer: 'We can make new keys to replace keys lost down drains, sewers, or water. We cannot retrieve keys from drains, but we can cut and program replacements same-day.',
            },
            {
                question: 'What if my car alarm is going off?',
                answer: 'We can gain entry to your vehicle to silence the alarm, diagnose alarm faults, disconnect faulty alarms, or reprogram alarm systems if related to key issues.',
            },
            {
                question: 'Do you help with car theft recovery?',
                answer: 'Yes, after theft recovery, we can replace stolen keys, reprogram immobilizers to delete stolen keys, repair damaged locks/ignitions, and secure the vehicle against re-theft.',
            },
            {
                question: 'Can you help late at night (2-5 AM)?',
                answer: 'Yes, we operate 24/7 including overnight hours. Late-night call-outs are common after nights out, shift work, or returning from travel. Call anytime.',
            },
            {
                question: 'What if I locked my keys in a running car?',
                answer: 'We prioritize running vehicles due to fuel waste, emission concerns, and security risks. We will gain entry quickly and safely to recover your keys and secure the vehicle.',
            },
            {
                question: 'Can you help if I am at a festival or event?',
                answer: 'Yes, we can attend outdoor events, festivals, concerts, sporting events, and temporary car parks across Greater Manchester. Provide exact location details to our dispatcher.',
            },
            {
                question: 'What if my key broke while driving?',
                answer: 'If your key broke in the ignition while driving, safely pull over and call us. We will extract the broken key, cut a new key, program it, and get you back on the road.',
            },
            {
                question: 'Do you help with rental cars?',
                answer: 'Yes, we service rental vehicles. You may need rental company authorization. Keep all receipts and documentation for reimbursement claims from the rental company or insurance.',
            },
            {
                question: 'Can you help if my smart key stopped working suddenly?',
                answer: 'Yes, sudden smart key failure can be caused by dead battery, desynchronization, or electronic faults. We diagnose the issue, replace batteries, reprogram keys, or supply replacements.',
            },
            {
                question: 'What if I am at a hotel or temporary location?',
                answer: 'We service hotels, Airbnb properties, temporary accommodations, and visitor parking across Manchester. Provide the full address and any access instructions to our dispatcher.',
            },
            {
                question: 'Can you help if my car is in a tight parking space?',
                answer: 'Yes, we are experienced working in tight car parks, underground parking, narrow spaces, and difficult access locations. We carry portable compact equipment for confined spaces.',
            },
            {
                question: 'Do you help with locked glove boxes or storage?',
                answer: 'Yes, we can open locked glove boxes, center consoles, lockable storage compartments, and roof boxes using non-destructive techniques or by cutting new keys.',
            },
            {
                question: 'What if my car is brand new?',
                answer: 'We service brand new vehicles using manufacturer-approved non-destructive entry methods and OEM programming protocols. Your warranty remains intact.',
            },
            {
                question: 'Can you help if my keys are inside a locked boot?',
                answer: 'Yes, locked boot with keys inside is common. We access through rear seats, emergency releases, or specialized entry techniques without damaging the vehicle.',
            },
            {
                question: 'What if I need help during rush hour?',
                answer: 'Rush hour traffic (7-9 AM, 4-7 PM) affects our travel times. We factor this into ETA estimates and may dispatch from different locations to minimize delays.',
            },
            {
                question: 'Do you work in residential areas?',
                answer: 'Yes, we service residential driveways, apartment buildings, gated communities, and housing estates across all Manchester neighborhoods.',
            },
            {
                question: 'Can you help if someone else has my spare key?',
                answer: 'If your spare key is unavailable (at home, with family, at work), we can make a new key on-site without waiting for spare key collection. Faster and more convenient.',
            },
            {
                question: 'What if my transponder chip is damaged?',
                answer: 'We can replace damaged transponder chips, reprogram new chips, clone existing chips, or supply complete new transponder keys with fresh chips programmed to your vehicle.',
            },
            {
                question: 'Do you help with fleet emergencies?',
                answer: 'Yes, we provide emergency fleet locksmith services for businesses, delivery companies, taxi firms, and commercial operators with multiple vehicles needing urgent attention.',
            },
            {
                question: 'Can you help if I purchased a car without keys?',
                answer: 'Yes, buying a car without keys or with insufficient keys is common. We can decode locks, cut new keys, and program immobilizers even with zero working keys.',
            },
            {
                question: 'What if my key fob screen is blank?',
                answer: 'Blank fob screens usually indicate dead batteries. We carry common fob batteries, replace them on-site, and reprogram the fob if needed. If hardware failed, we supply new fobs.',
            },
            {
                question: 'Do you prioritize vulnerable people?',
                answer: 'Yes, we prioritize elderly, disabled, or vulnerable individuals in distress, especially in bad weather, unsafe locations, or medical situations. Inform our dispatcher.',
            },
        ],
    },
    {
        category: 'Car Lockout Services',
        slug: 'car-lockout',
        faqs: [
            {
                question: 'How do you unlock a car without keys?',
                answer: 'We use professional non-destructive entry techniques including Lishi lock picks, air wedges, long reach tools, and specialized unlocking devices that do not damage paintwork, seals, or locks.',
            },
            {
                question: 'Will you damage my car during lockout service?',
                answer: 'No, we use non-destructive methods specifically designed to avoid damage. We do not use coat hangers, screwdrivers, or crude tools that damage vehicles. Fully insured for peace of mind.',
            },
            {
                question: 'How long does a car lockout take?',
                answer: 'Most car lockouts take 5-20 minutes once we arrive. Complex security systems, weather seals, or unusual lock mechanisms may take longer. We work efficiently to minimize wait time.',
            },
            {
                question: 'Can you unlock any car?',
                answer: 'Yes, we unlock all makes and models including older mechanical locks and modern electronic locks. Each vehicle requires different techniques based on the locking mechanism.',
            },
            {
                question: 'What if my keys are visible inside the car?',
                answer: 'Keys visible inside are frustrating but common. We access the vehicle without breaking windows, retrieve your keys, and ensure all doors and locks function normally.',
            },
            {
                question: 'Can you unlock a car with central locking?',
                answer: 'Yes, central locking systems are unlocked through door locks, which then release all doors electronically. We can also access through manual lock releases if central system fails.',
            },
            {
                question: 'What if my car has deadlocks?',
                answer: 'Deadlocked vehicles require specialized techniques. Deadlocks disable internal handles and require lock picking or key decoding. This takes longer but is still non-destructive.',
            },
            {
                question: 'Can you unlock my boot from outside?',
                answer: 'Yes, we can unlock boots through door entry first, then use internal boot releases, or through rear seat access. Direct boot lock manipulation is possible on some vehicles.',
            },
            {
                question: 'What if I locked my keyless key inside?',
                answer: 'Keyless vehicles with the fob inside usually remain unlocked, but some lock after a timeout. We can gain entry and retrieve the fob using techniques that do not trigger alarms.',
            },
            {
                question: 'Do you unlock cars with alarms?',
                answer: 'Yes, we can unlock vehicles with factory or aftermarket alarms. The alarm may sound briefly during entry. We then use your keys or disable the alarm using proper procedures.',
            },
            {
                question: 'Can you unlock frozen car doors?',
                answer: 'Yes, frozen locks in winter are common. We can carefully unlock frozen mechanisms, apply de-icer, warm locks safely, and ensure the lock operates properly after thawing.',
            },
            {
                question: 'What if my lock is damaged or broken?',
                answer: 'If locks are damaged, jammed, or broken, we can still gain entry using alternative access points, then repair or replace the faulty lock mechanism and provide new keys.',
            },
            {
                question: 'Can you unlock cars at night?',
                answer: 'Yes, we provide 24/7 lockout service day or night. Nighttime lockouts are common. We have proper lighting equipment to work safely in darkness.',
            },
            {
                question: 'What if my child or pet is locked inside?',
                answer: 'This is an emergency. Call 999 immediately if the child/pet is in distress. Then call us for fastest possible entry. We prioritize these calls above all others.',
            },
            {
                question: 'Do you unlock car boots separately?',
                answer: 'Yes, if only the boot is locked (with keys inside), we can enter through the cabin and access the boot release, or use boot lock manipulation techniques.',
            },
            {
                question: 'Can you unlock cars with tinted windows?',
                answer: 'Yes, tinted windows do not prevent our entry techniques. We use tools designed to work regardless of tint, and tint film is not damaged during professional lockout service.',
            },
            {
                question: 'What if my door handle broke during lockout?',
                answer: 'Frozen or forcefully pulled handles can break. If you damaged the handle attempting self-entry, we can still access the vehicle and then repair/replace the broken handle.',
            },
            {
                question: 'Can you unlock cars with aftermarket locks?',
                answer: 'Yes, aftermarket deadlocks, steering locks, and security devices can be bypassed using specialized techniques. Inform our dispatcher about any aftermarket security.',
            },
            {
                question: 'What if I only locked one door?',
                answer: 'If only one door is locked but others are unlocked, entry is quick and easy. However, all doors locked centrally requires professional tools to access any door.',
            },
            {
                question: 'Do you unlock vintage or classic cars?',
                answer: 'Yes, classic cars often have simpler locks that respond well to traditional picking techniques. We are careful with delicate mechanisms and trim on vintage vehicles.',
            },
            {
                question: 'Can you unlock without scratching paint?',
                answer: 'Yes, our tools have protective rubber tips and sheaths specifically designed to prevent paint scratches, dents, or marks. We take extreme care with vehicle bodywork.',
            },
            {
                question: 'What if my car has frameless windows?',
                answer: 'Frameless windows require specialized gentle techniques to avoid glass stress or damage. We have tools specifically for frameless window vehicles like coupes and convertibles.',
            },
            {
                question: 'Can you unlock soft-top convertibles?',
                answer: 'Yes, we can access convertibles through proper entry points without cutting or damaging the soft top. Cutting tops is never necessary with professional equipment.',
            },
            {
                question: 'What if my lock cylinder is missing?',
                answer: 'Some modern cars have no external lock cylinders (keyless only). We use alternative entry methods through sensor manipulation or through emergency access points.',
            },
            {
                question: 'Do you unlock cars in car washes?',
                answer: 'Yes, keys locked in cars during car washes happen occasionally. We can safely access the vehicle even in wet conditions without electrical concerns.',
            },
            {
                question: 'Can you unlock with a child seat in the way?',
                answer: 'Yes, child seats can block tool access, but we have long-reach tools and techniques to work around seats, shopping, and cargo inside vehicles.',
            },
            {
                question: 'What if I broke my window already?',
                answer: 'If you already broke a window, we can still help secure the vehicle, provide temporary window covering, and cut new keys if originals were lost.',
            },
            {
                question: 'Can you unlock cars with privacy glass?',
                answer: 'Yes, privacy glass or dark tint does not prevent our tools from working. We can still insert tools and manipulate locks regardless of glass visibility.',
            },
            {
                question: 'What if my car is parked very tightly?',
                answer: 'Tight parking spaces can make access difficult but not impossible. We carry compact tools for tight situations and can work from the smallest access gaps.',
            },
            {
                question: 'Do you unlock electric cars?',
                answer: 'Yes, electric vehicles like Tesla, Nissan Leaf, BMW i3 are unlocked using the same professional techniques as combustion vehicles. We are trained in EV safety.',
            },
            {
                question: 'Can you unlock if my battery is completely dead?',
                answer: 'Yes, dead batteries can affect central locking but not mechanical locks. We can still gain entry mechanically, then jump-start or charge your battery.',
            },
            {
                question: 'What if I have an aftermarket central locking kit?',
                answer: 'Aftermarket central locking can complicate entry, but we work with all systems. Inform our dispatcher so we bring appropriate diagnostic tools if needed.',
            },
            {
                question: 'Can you unlock without setting off the alarm?',
                answer: 'Some alarms will sound during entry (factory feature). We work quickly to gain entry and use your keys to disarm, or we can disable alarms if necessary.',
            },
            {
                question: 'What if my door is frozen shut?',
                answer: 'Frozen door seals in winter can prevent opening even when unlocked. We can safely separate frozen seals, apply de-icer, and ensure smooth operation without tearing rubber.',
            },
            {
                question: 'Do you unlock right-hand drive and left-hand drive cars?',
                answer: 'Yes, we service both RHD (UK standard) and LHD (European/import) vehicles. The door side does not affect our techniques.',
            },
            {
                question: 'Can you unlock cars with custom modifications?',
                answer: 'Yes, modified cars with custom doors, locks, or security need specialized approach. Inform our dispatcher about modifications so we come prepared.',
            },
            {
                question: 'What if I just bought the car and do not have keys?',
                answer: 'Locked cars without keys require entry plus key creation. We can access the vehicle, decode locks, cut keys, and program immobilizers all in one service.',
            },
            {
                question: 'Can you unlock if my fuel flap is also locked?',
                answer: 'Once we unlock your doors, internal fuel flap releases are accessible. If the flap lock is separate, we can pick or drill the flap lock to access fuel.',
            },
            {
                question: 'Do you unlock cars that have been in accidents?',
                answer: 'Yes, accident-damaged cars with jammed doors or locks can be accessed. Damage may require different entry points or lock replacement. We assess on-site.',
            },
            {
                question: 'What if I need entry but no key replacement?',
                answer: 'If you have spare keys elsewhere and just need entry now, we provide lockout-only service at lower cost than lockout plus key programming.',
            },
        ],
    },
    {
        category: 'Car Key Replacement',
        slug: 'key-replacement',
        faqs: [
            {
                question: 'How much does car key replacement cost?',
                answer: 'Costs vary by vehicle make, model, year, and key type. Basic keys start around £80-150, transponder keys £120-250, and smart keys £150-400. We provide fixed quotes before dispatch.',
            },
            {
                question: 'Is car key replacement cheaper than dealership?',
                answer: 'Yes, our mobile locksmith service is typically 30-60% cheaper than dealership prices, with faster response times and no need to tow your vehicle.',
            },
            {
                question: 'Can you replace car keys same day?',
                answer: 'Yes, most car keys are cut and programmed on-site the same day within 30-90 minutes. Rare vehicles may require ordering parts (1-3 days).',
            },
            {
                question: 'Do I need to tow my car for key replacement?',
                answer: 'No, we come to your vehicle location and provide complete mobile key cutting and programming on-site. No towing necessary.',
            },
            {
                question: 'Can you replace keys if I lost all my keys?',
                answer: 'Yes, all-keys-lost is our specialty. We decode locks, extract key codes, cut new keys, and program immobilizers without needing an existing working key.',
            },
            {
                question: 'How long does key replacement take?',
                answer: 'Standard replacement takes 30-60 minutes for cutting and programming. Complex systems (BMW CAS4, Mercedes Keyless Go, all-keys-lost) can take 90-120 minutes.',
            },
            {
                question: 'Do replacement keys work exactly like original?',
                answer: 'Yes, replacement keys are cut to manufacturer specifications and programmed to identical functionality including remote lock, unlock, boot, alarm, and immobilizer.',
            },
            {
                question: 'Can you replace smart keys?',
                answer: 'Yes, we replace and program smart keys, proximity keys, keyless entry fobs, and push-button start keys for all makes using OBD programming and key coding.',
            },
            {
                question: 'What if I only have one key and want a spare?',
                answer: 'Having a spare key is essential. We can clone or cut duplicates from your existing key. This is faster and cheaper than waiting until you lose your only key.',
            },
            {
                question: 'Do you replace keys for German cars?',
                answer: 'Yes, German vehicles (BMW, Mercedes, Audi, VW, Porsche) are our specialty. We have advanced diagnostic tools including Autel IM608 Pro for complex German security systems.',
            },
            {
                question: 'Can you replace keys for luxury cars?',
                answer: 'Yes, we service luxury brands including Mercedes, BMW, Audi, Porsche, Jaguar, Land Rover, Lexus, and other premium vehicles with advanced security.',
            },
            {
                question: 'What information do you need for key replacement?',
                answer: 'We need vehicle registration (VRN), VIN number, proof of ownership (V5 logbook, insurance, driving license), and details about the key issue.',
            },
            {
                question: 'Can you replace keys without the VIN?',
                answer: 'The VIN helps with key coding but is not always required. If VIN is unavailable, we can decode locks or retrieve VIN from the vehicle itself on-site.',
            },
            {
                question: 'Do you supply original manufacturer keys?',
                answer: 'We supply OEM (original equipment manufacturer) keys when available, or high-quality aftermarket keys that meet or exceed OEM specifications at better prices.',
            },
            {
                question: 'Can you replace keys for keyless cars?',
                answer: 'Yes, keyless entry and push-button start vehicles require smart key replacement and programming. We have equipment for all keyless systems across all brands.',
            },
            {
                question: 'What if my car is very new?',
                answer: 'We service the latest vehicle models including 2024-2026 models. We maintain updated software and equipment for newest security systems and key technologies.',
            },
            {
                question: 'Can you replace keys for imported cars?',
                answer: 'Yes, we service European imports, Japanese imports, American imports, and grey imports. Import vehicles may have different key systems requiring specialized approaches.',
            },
            {
                question: 'Do you replace van and truck keys?',
                answer: 'Yes, we replace keys for vans (Ford Transit, Mercedes Sprinter, VW Transporter), trucks, HGVs, and commercial vehicles including fleet vehicles.',
            },
            {
                question: 'Can you replace motorcycle keys?',
                answer: 'Yes, we cut and program motorcycle keys, scooter keys, and motorbike keys including transponder-equipped bikes with immobilizers.',
            },
            {
                question: 'What if my keys were stolen?',
                answer: 'For stolen keys, we recommend deleting old keys from the immobilizer system (preventing theft), then programming new keys. Contact your insurance for coverage.',
            },
            {
                question: 'Can you replace flip keys?',
                answer: 'Yes, flip keys (folding keys) are supplied with new cases and blades, cut to specification, and programmed with remote functions matching your original.',
            },
            {
                question: 'Do you replace key fobs separately from keys?',
                answer: 'Yes, if your mechanical key works but the fob is broken, we can replace just the fob and program remote functions without replacing the physical key.',
            },
            {
                question: 'Can you replace keys if I purchased a used car?',
                answer: 'Yes, used car keys are commonly worn, damaged, or insufficient (only one key). We provide replacement and spare keys for used car buyers regularly.',
            },
            {
                question: 'What if the dealership cannot help?',
                answer: 'Some dealerships cannot service older models or discontinued vehicles. We have extensive key blanks and can service vehicles dealerships decline.',
            },
            {
                question: 'Can you replace keys with metal blades?',
                answer: 'Yes, traditional metal key blades (mechanical keys) are cut using precision key cutting machines to exact specifications from code or from existing keys.',
            },
            {
                question: 'Do you replace keys for French cars?',
                answer: 'Yes, French vehicles (Peugeot, Renault, Citroen) often have unique key card systems and coded keys. We have specialized equipment for French marques.',
            },
            {
                question: 'Can you replace keys for Japanese cars?',
                answer: 'Yes, Japanese brands (Toyota, Honda, Nissan, Mazda, Subaru, Mitsubishi, Suzuki) are serviced with OEM-quality keys cut and programmed on-site.',
            },
            {
                question: 'What if I need keys quickly for travel?',
                answer: 'We prioritize urgent situations including travel plans, work commitments, and medical appointments. Inform our dispatcher for fastest possible service.',
            },
            {
                question: 'Can you replace keys for cars over 20 years old?',
                answer: 'Yes, older vehicles often have simpler key systems making replacement easier and more affordable. We stock blanks for many classic and older models.',
            },
            {
                question: 'Do you replace keys with rubber buttons?',
                answer: 'Yes, worn rubber buttons on key fobs are replaced with new OEM or aftermarket fob cases with fresh buttons. We transfer internal electronics to new cases.',
            },
            {
                question: 'Can you replace keys damaged by water?',
                answer: 'Yes, water-damaged keys often need full replacement including new fob electronics and transponder chips. We cut and program complete new keys.',
            },
            {
                question: 'What if my key was damaged in a fire?',
                answer: 'Fire-damaged keys and electronics require complete replacement. We can still decode locks or extract key codes from the vehicle VIN to make new keys.',
            },
            {
                question: 'Can you replace keys for hybrid cars?',
                answer: 'Yes, hybrid vehicles (Toyota Prius, Honda Insight, etc.) use standard key replacement procedures. We program smart keys for all hybrid models.',
            },
            {
                question: 'Do you replace keys with logos?',
                answer: 'Yes, OEM keys include manufacturer logos (BMW roundel, Mercedes star, etc.). Aftermarket keys may have generic or blank buttons at lower prices.',
            },
            {
                question: 'Can you replace keys for electric cars?',
                answer: 'Yes, electric vehicles including Tesla, Nissan Leaf, BMW i-series, Audi e-tron are serviced. EV key cards and fobs are programmed using specialized protocols.',
            },
            {
                question: 'What if I need multiple spare keys?',
                answer: 'We can provide multiple spare keys in one service visit. Bulk key orders for families or fleet vehicles receive competitive pricing.',
            },
            {
                question: 'Can you replace keys without proof of ownership?',
                answer: 'No, for security and legal reasons we always require proof of ownership such as V5 logbook, insurance documents, or purchase receipts before making keys.',
            },
            {
                question: 'Do you replace keys with emergency blades?',
                answer: 'Yes, smart keys with hidden emergency blades (for manual lock access if battery dies) are supplied with both the fob and emergency blade cut to specification.',
            },
            {
                question: 'Can you replace keys if my car is financed?',
                answer: 'Yes, financed cars can have keys replaced. You may need finance company details on the V5. Ownership verification ensures you are the registered keeper.',
            },
            {
                question: 'What if I need keys for a company car?',
                answer: 'Company vehicle keys require authorization from the fleet manager or company director. We work with businesses regularly and can invoice companies directly.',
            },
        ],
    },
    {
        category: 'Key Programming & Transponders',
        slug: 'key-programming',
        faqs: [
            {
                question: 'What is transponder key programming?',
                answer: 'Transponder programming synchronizes the microchip in your key with the vehicle immobilizer system. The chip sends a unique code that allows the engine to start.',
            },
            {
                question: 'How long does key programming take?',
                answer: 'Basic transponder programming takes 15-30 minutes. Advanced systems (BMW CAS, Mercedes EIS, proximity keys, all-keys-lost) can take 60-120 minutes.',
            },
            {
                question: 'Can you program keys without going to the dealer?',
                answer: 'Yes, we program keys mobile on-site using professional diagnostic equipment. No dealer visit or vehicle towing required. Faster and cheaper than dealerships.',
            },
            {
                question: 'Do all car keys have transponders?',
                answer: 'Most cars from 1995 onwards have transponder immobilizer systems. Very old cars and some basic models use mechanical keys only without chips.',
            },
            {
                question: 'Can you program a key I bought online?',
                answer: 'Yes, if you purchased a blank key or fob online, we can cut and program it to your vehicle. Ensure the key is compatible with your car year/model.',
            },
            {
                question: 'What equipment do you use for programming?',
                answer: 'We use Autel IM608 Pro, Autel MaxiIM, and manufacturer-specific diagnostic tools for OBD programming, EEPROM reading, and immobilizer coding.',
            },
            {
                question: 'Can you program keys for German cars?',
                answer: 'Yes, German vehicles (BMW EWS/CAS, Mercedes EIS/KG, Audi MQB, VW KESSY) are our specialty. We have advanced tools for complex German security systems.',
            },
            {
                question: 'What if programming fails?',
                answer: 'Programming failures are rare with professional equipment. If we cannot program on-site, we advise alternatives and only charge a fair call-out fee.',
            },
            {
                question: 'Can you program smart keys?',
                answer: 'Yes, smart keys (proximity keys, keyless go, push-button start) are programmed using OBD protocols, BCM programming, and key learning procedures.',
            },
            {
                question: 'Do you need the car to program keys?',
                answer: 'Yes, the vehicle must be present for immobilizer programming. The key must communicate with the specific vehicle ECU/immobilizer module.',
            },
            {
                question: 'Can you program keys if I lost all my keys?',
                answer: 'Yes, all-keys-lost programming is possible. We use advanced techniques including EEPROM reading, BCM access, and dealer-level programming to add new keys.',
            },
            {
                question: 'Will programming void my warranty?',
                answer: 'No, our programming uses manufacturer-approved OBD protocols. We do not modify software or hardware in ways that void warranties.',
            },
            {
                question: 'Can you program remote functions?',
                answer: 'Yes, remote lock/unlock, boot release, alarm, and panic buttons are programmed simultaneously with transponder programming in one procedure.',
            },
            {
                question: 'What if my key works but remote does not?',
                answer: 'If the engine starts but remote buttons do not work, the key has lost remote sync. We reprogram the remote functions, or replace the fob if hardware failed.',
            },
            {
                question: 'Can you delete old keys from the system?',
                answer: 'Yes, for security after key loss/theft, we can erase old keys from immobilizer memory. This prevents deleted keys from starting your car.',
            },
            {
                question: 'How many keys can be programmed to one car?',
                answer: 'Most vehicles accept 2-8 programmed keys. Exact limits vary by make/model. If maximum is reached, we can delete old keys to add new ones.',
            },
            {
                question: 'Can you program keys for older cars?',
                answer: 'Yes, older immobilizer systems (1995-2005) often use simpler programming that is faster and easier than modern encrypted systems.',
            },
            {
                question: 'What if my immobilizer light is flashing?',
                answer: 'Flashing immobilizer lights indicate key not recognized, chip failure, or system faults. We diagnose the issue, reprogram keys, or repair immobilizer faults.',
            },
            {
                question: 'Can you program keys for push-button start cars?',
                answer: 'Yes, push-button start vehicles require smart key programming via OBD or BCM access. We program proximity keys for all makes with start-button systems.',
            },
            {
                question: 'Do you program keys for French cars?',
                answer: 'Yes, French vehicles (Renault, Peugeot, Citroen) often use key cards or unique systems. We have specialized equipment for Renault key cards and Peugeot key programming.',
            },
            {
                question: 'Can you program aftermarket keys?',
                answer: 'Yes, high-quality aftermarket key blanks with chips can be programmed just like OEM keys. Aftermarket keys save money without sacrificing functionality.',
            },
            {
                question: 'What if my key chip is damaged?',
                answer: 'Damaged chips cannot be repaired and need replacement. We supply new transponder keys with fresh chips programmed to your immobilizer.',
            },
            {
                question: 'Can you program keys without OBD access?',
                answer: 'Some vehicles require EEPROM reading (chip-level access) when OBD programming is unavailable. This is more complex but still achievable for most vehicles.',
            },
            {
                question: 'Do you program keys for keyless entry?',
                answer: 'Yes, keyless entry fobs (separate from smart keys) are programmed to your vehicle BCM/security module using remote learning procedures.',
            },
            {
                question: 'Can you program keys for cars with alarms?',
                answer: 'Yes, we program keys to work with factory and aftermarket alarms. Sometimes alarm and immobilizer programming must be synchronized.',
            },
            {
                question: 'What if programming requires PIN code?',
                answer: 'Some vehicles require a security PIN code for programming. We can retrieve PIN codes from the vehicle ECU, or through dealer networks if needed.',
            },
            {
                question: 'Can you program keys for American cars?',
                answer: 'Yes, American vehicles (Ford, GM, Chrysler, Dodge, Jeep, Chevrolet) use different protocols than European cars. We have equipment for PASSLOCK, PATS, and other US systems.',
            },
            {
                question: 'Do you program keys for luxury cars?',
                answer: 'Yes, luxury brands (Mercedes, BMW, Audi, Porsche, Lexus, Jaguar, Land Rover) have advanced security requiring specialized tools. We service all luxury makes.',
            },
            {
                question: 'Can you program keys if battery is low?',
                answer: 'Key programming requires stable 12V battery power. If your battery is low, we can jump-start or charge it before programming to avoid failures.',
            },
            {
                question: 'What if my key programs but does not start the car?',
                answer: 'If the key programs successfully but the engine does not start, there may be separate mechanical, fuel, or electrical issues unrelated to the key.',
            },
            {
                question: 'Can you program spare keys?',
                answer: 'Yes, programming spare keys while you still have working keys is easier, faster, and cheaper than all-keys-lost situations. Highly recommended.',
            },
            {
                question: 'Do you program keys for vans?',
                answer: 'Yes, van keys (Ford Transit, Mercedes Sprinter, VW Transporter, etc.) are programmed using commercial vehicle protocols. We service all van makes.',
            },
            {
                question: 'Can you program replacement ECUs?',
                answer: 'If you replaced the ECU or immobilizer module, existing keys may not work. We can sync keys to new ECUs or program new keys to replacement ECUs.',
            },
            {
                question: 'What if my key works intermittently?',
                answer: 'Intermittent key recognition indicates weak transponder signal, chip failure, or antenna issues. We diagnose and replace failing components.',
            },
            {
                question: 'Can you program keys for motorcycles?',
                answer: 'Yes, motorcycles with immobilizers (Honda, Yamaha, Kawasaki, Suzuki, BMW, Ducati, Triumph) can have transponder keys programmed.',
            },
            {
                question: 'Do you program keys for electric vehicles?',
                answer: 'Yes, EVs like Tesla, Nissan Leaf, BMW i-series use smart key programming similar to combustion vehicles. Tesla requires special procedures.',
            },
            {
                question: 'Can you program keys if the car does not turn over?',
                answer: 'If the car has starter or electrical problems, we can still program keys. However, key programming will not fix mechanical failures.',
            },
            {
                question: 'What if my car needs two keys to program?',
                answer: 'Some manufacturers require two working keys to program a third. If you only have one key or zero keys, we use dealer-level access to bypass this restriction.',
            },
            {
                question: 'Can you program keys on the roadside?',
                answer: 'Yes, our mobile service programs keys anywhere including roadsides, car parks, driveways, and workplaces. We carry portable power supplies if needed.',
            },
            {
                question: 'Do you program keys for hybrid vehicles?',
                answer: 'Yes, hybrids (Toyota Prius, Honda Insight, Ford Fusion Hybrid, etc.) use standard programming procedures. Hybrid technology does not affect key programming.',
            },
            {
                question: 'Can you program keys if I installed a new immobilizer?',
                answer: 'Yes, aftermarket immobilizers need separate programming from factory systems. We can program keys to both factory and aftermarket security.',
            },
            {
                question: 'What if my key fob screen shows errors?',
                answer: 'Fob display errors may indicate low battery, desync, or electronics failure. We replace batteries, reprogram, or replace the fob as needed.',
            },
            {
                question: 'Can you program emergency backup keys?',
                answer: 'Yes, emergency backup keys (hidden blades in smart keys) are cut mechanically but still need transponder programming if they contain chips.',
            },
            {
                question: 'Do you program keys for disabled access vehicles?',
                answer: 'Yes, adapted vehicles with hand controls or wheelchair access are serviced. Adaptations do not affect key programming procedures.',
            },
            {
                question: 'Can you program keys for right-hand drive and left-hand drive?',
                answer: 'Yes, steering side does not affect immobilizer programming. We service both UK RHD vehicles and European/import LHD vehicles.',
            },
        ],
    },
    {
        category: 'Vehicle Brand Questions - BMW',
        slug: 'bmw-locksmith',
        faqs: [
            {
                question: 'Can you program BMW keys?',
                answer: 'Yes, we specialize in BMW key programming including EWS, CAS, CAS2, CAS3, CAS3+, CAS4, and FEM/BDC systems using Autel IM608 Pro and BMW-specific tools.',
            },
            {
                question: 'How much does BMW key replacement cost?',
                answer: 'BMW key replacement costs £180-350 depending on model and key type (EWS, CAS, smart key, Display Key). We are significantly cheaper than BMW dealerships.',
            },
            {
                question: 'Can you replace BMW keys without going to the dealer?',
                answer: 'Yes, we provide mobile BMW key replacement and programming on-site. No dealer visit or towing required. Faster service at better prices.',
            },
            {
                question: 'Do you program BMW CAS keys?',
                answer: 'Yes, BMW CAS systems (CAS1, CAS2, CAS3, CAS3+, CAS4) are programmed using advanced diagnostic tools with dealer-level access.',
            },
            {
                question: 'Can you replace BMW keys if I lost all keys?',
                answer: 'Yes, BMW all-keys-lost is complex but achievable. We use EEPROM reading, CAS module programming, and ISN (Individual Secure Number) retrieval to add new keys.',
            },
            {
                question: 'How long does BMW key programming take?',
                answer: 'BMW key programming takes 30-90 minutes depending on system complexity. CAS4 and FEM systems take longer than older EWS systems.',
            },
            {
                question: 'Can you program BMW smart keys?',
                answer: 'Yes, BMW comfort access (smart key) and Display Key are programmed using CAS/FEM programming and remote functions via OBD access.',
            },
            {
                question: 'What BMW models do you service?',
                answer: 'We service all BMW models including 1, 2, 3, 4, 5, 6, 7, 8 Series, X1, X2, X3, X4, X5, X6, X7, Z4, i3, i4, i8, and Mini Cooper (BMW group).',
            },
            {
                question: 'Can you program BMW EWS keys?',
                answer: 'Yes, older BMW EWS (Electronic Weapon System) from 1995-2006 are programmed via OBD or EEPROM. EWS is simpler than newer CAS systems.',
            },
            {
                question: 'Do you cut BMW key blades?',
                answer: 'Yes, BMW key blades (HU92, HU58, HU100R profiles) are laser-cut to precise specifications using professional key cutting machines.',
            },
        ],
    },
    {
        category: 'Vehicle Brand Questions - Mercedes',
        slug: 'mercedes-locksmith',
        faqs: [
            {
                question: 'Can you replace Mercedes keys?',
                answer: 'Yes, we replace and program Mercedes keys including IR keys, EIS keys, Keyless Go, Keyless Go Comfort, and smart keys for all Mercedes models.',
            },
            {
                question: 'How much does Mercedes key replacement cost?',
                answer: 'Mercedes key costs £180-400 depending on EIS system version and key type. Chrome keys and Keyless Go systems are more expensive than basic IR keys.',
            },
            {
                question: 'Can you program Mercedes Keyless Go?',
                answer: 'Yes, Mercedes Keyless Go (proximity key) and Keyless Go Comfort are programmed using EIS module access and RF (radio frequency) synchronization.',
            },
            {
                question: 'Do you service Mercedes EIS systems?',
                answer: 'Yes, Mercedes EIS (Electronic Ignition Switch) systems including ESL (Electronic Steering Lock) are serviced. We can repair EIS faults and program keys.',
            },
            {
                question: 'Can you replace Mercedes keys if I lost all keys?',
                answer: 'Yes, Mercedes all-keys-lost requires EIS module access, password retrieval, and dealer-level programming. Complex but achievable with specialized equipment.',
            },
            {
                question: 'How long does Mercedes key programming take?',
                answer: 'Mercedes keys take 45-90 minutes depending on EIS system version. Older IR keys are faster than newer Keyless Go systems.',
            },
            {
                question: 'Can you fix Mercedes ESL problems?',
                answer: 'Yes, ESL (Electronic Steering Lock) faults cause key recognition errors. We diagnose ESL motor failures, replace ESL modules, and reprogram keys.',
            },
            {
                question: 'What Mercedes models do you work on?',
                answer: 'All Mercedes models: A-Class, B-Class, C-Class, E-Class, S-Class, CLA, CLS, GLA, GLB, GLC, GLE, GLS, G-Class, AMG, and Mercedes vans (Sprinter, Vito).',
            },
            {
                question: 'Can you program Mercedes smart keys?',
                answer: 'Yes, Mercedes smart keys (credit card style) and traditional fob-style keys are cut and programmed including remote and immobilizer functions.',
            },
            {
                question: 'Do you cut Mercedes key blades?',
                answer: 'Yes, Mercedes key profiles (HU64, HU162T) are laser-cut to exact specifications. Blades fit into fobs or are standalone for emergency access.',
            },
        ],
    },
    {
        category: 'Vehicle Brand Questions - Audi',
        slug: 'audi-locksmith',
        faqs: [
            {
                question: 'Can you replace Audi keys?',
                answer: 'Yes, we replace Audi keys for all models including MQB platform, older transponder keys, advanced key (keyless), and flip keys.',
            },
            {
                question: 'How much does Audi key replacement cost?',
                answer: 'Audi key prices £150-350 depending on model year and key type. MQB platform keys (2015+) are more complex than pre-2015 models.',
            },
            {
                question: 'Can you program Audi MQB keys?',
                answer: 'Yes, Audi MQB platform (2015+ A3, A4, A5, A6, Q2, Q3, Q5, Q7, TT) requires advanced programming. We use Autel equipment with MQB capability.',
            },
            {
                question: 'Do you program Audi advanced keys?',
                answer: 'Yes, Audi advanced key (keyless go) and comfort key are programmed using immobilizer access and proximity sensor pairing procedures.',
            },
            {
                question: 'Can you replace Audi keys if I lost all keys?',
                answer: 'Yes, Audi all-keys-lost uses EEPROM reading or dealer-level online access. MQB platform is complex but achievable with proper equipment.',
            },
            {
                question: 'How long does Audi key programming take?',
                answer: 'Audi keys take 30-90 minutes. Older pre-MQB models are faster. MQB platform and all-keys-lost situations take longer.',
            },
            {
                question: 'Can you program Audi flip keys?',
                answer: 'Yes, Audi flip keys (folding blade) are supplied with new cases, cut blades, programmed chips, and remote functions.',
            },
            {
                question: 'What Audi models do you service?',
                answer: 'All Audi models: A1, A3, A4, A5, A6, A7, A8, Q2, Q3, Q4, Q5, Q7, Q8, TT, R8, e-tron, and older models back to 1995.',
            },
            {
                question: 'Can you cut Audi laser-cut keys?',
                answer: 'Yes, Audi HU66 profile (laser-cut reversible blade) is cut using precision laser equipment to exact manufacturer tolerances.',
            },
            {
                question: 'Do you work on Audi e-tron electric vehicles?',
                answer: 'Yes, Audi e-tron and other electric Audis use MQB platform key programming identical to combustion models.',
            },
        ],
    },
    {
        category: 'Vehicle Brand Questions - Volkswagen',
        slug: 'volkswagen-locksmith',
        faqs: [
            {
                question: 'Can you replace VW keys?',
                answer: 'Yes, we replace Volkswagen keys for all models including MQB platform, KESSY keyless systems, flip keys, and older transponder keys.',
            },
            {
                question: 'How much does VW key replacement cost?',
                answer: 'VW key costs £120-280 depending on model and system. MQB and KESSY keys cost more than basic transponder keys.',
            },
            {
                question: 'Can you program VW KESSY keys?',
                answer: 'Yes, VW KESSY (Keyless Entry Start and Stop) systems are programmed using advanced diagnostic access and proximity pairing.',
            },
            {
                question: 'Do you service VW MQB platform vehicles?',
                answer: 'Yes, VW MQB (2015+ Golf, Passat, Tiguan, Touran, Arteon, T-Roc) is programmed using MQB-capable equipment.',
            },
            {
                question: 'Can you replace VW keys if I lost all keys?',
                answer: 'Yes, VW all-keys-lost uses EEPROM or online dealer access. MQB platform requires component security access and is more complex.',
            },
            {
                question: 'How long does VW key programming take?',
                answer: 'VW keys take 20-60 minutes. Pre-MQB models are quick. MQB and KESSY systems take longer due to pairing procedures.',
            },
            {
                question: 'Can you program VW flip keys?',
                answer: 'Yes, VW flip keys are supplied with new housings, cut blades, programmed chips, and remote lock/unlock functions.',
            },
            {
                question: 'What VW models do you work on?',
                answer: 'All VW models: Golf, Polo, Passat, Tiguan, Touareg, T-Roc, T-Cross, Arteon, Up, Sharan, Touran, Caddy, Transporter, California.',
            },
            {
                question: 'Can you cut VW HU66 keys?',
                answer: 'Yes, VW HU66 laser-cut profile is cut precisely using professional laser key machines. HU66 is standard across most VW models.',
            },
            {
                question: 'Do you service VW Transporter vans?',
                answer: 'Yes, VW commercial vehicles (Transporter, Caddy, Crafter, Amarok) are serviced with van-specific key programming.',
            },
        ],
    },
    {
        category: 'Vehicle Brand Questions - Ford',
        slug: 'ford-locksmith',
        faqs: [
            {
                question: 'Can you replace Ford keys?',
                answer: 'Yes, we replace Ford keys for all models including PATS (Passive Anti-Theft System) transponder keys and Ford keyless systems.',
            },
            {
                question: 'How much does Ford key replacement cost?',
                answer: 'Ford key costs £100-220 depending on model. Ford keys are generally more affordable than German brands due to simpler systems.',
            },
            {
                question: 'Can you program Ford PATS keys?',
                answer: 'Yes, Ford PATS (transponder immobilizer) is programmed via OBD access using Ford-specific programming procedures.',
            },
            {
                question: 'Do you replace Ford Transit keys?',
                answer: 'Yes, Ford Transit vans (Transit, Transit Custom, Transit Connect) are serviced with commercial key programming. Very common job.',
            },
            {
                question: 'Can you replace Ford keys if I lost all keys?',
                answer: 'Yes, Ford all-keys-lost is achievable via EEPROM reading or OBD programming depending on model year and security level.',
            },
            {
                question: 'How long does Ford key programming take?',
                answer: 'Ford keys take 15-40 minutes. Ford PATS systems are generally faster and simpler than European systems.',
            },
            {
                question: 'Can you program Ford keyless entry?',
                answer: 'Yes, Ford intelligent access (keyless) and push-button start systems are programmed including proximity key pairing.',
            },
            {
                question: 'What Ford models do you service?',
                answer: 'All Ford models: Fiesta, Focus, Mondeo, Kuga, Puma, EcoSport, Edge, Mustang, Ranger, Transit, Transit Custom, Connect, Galaxy.',
            },
            {
                question: 'Can you cut Ford Tibbe keys?',
                answer: 'Yes, older Ford Tibbe keys (cylindrical profile) are cut using specialized Tibbe cutting equipment. Newer Fords use HU101 profile.',
            },
            {
                question: 'Do you work on Ford electric vehicles?',
                answer: 'Yes, Ford Mustang Mach-E and other Ford EVs use standard Ford key programming protocols similar to combustion models.',
            },
        ],
    },
    {
        category: 'Vehicle Brand Questions - Vauxhall',
        slug: 'vauxhall-locksmith',
        faqs: [
            {
                question: 'Can you replace Vauxhall keys?',
                answer: 'Yes, we replace Vauxhall (Opel) keys including flip keys, proximity keys, and transponder keys for all models.',
            },
            {
                question: 'How much does Vauxhall key replacement cost?',
                answer: 'Vauxhall key costs £100-200. Vauxhall keys are affordable compared to premium brands due to simpler security systems.',
            },
            {
                question: 'Can you program Vauxhall flip keys?',
                answer: 'Yes, Vauxhall flip keys are supplied with new cases, cut blades, programmed chips, and remote functions for lock/unlock.',
            },
            {
                question: 'Do you service Vauxhall Astra and Corsa?',
                answer: 'Yes, Vauxhall Astra, Corsa, Insignia, Mokka, Crossland, Grandland, Combo, Vivaro are all serviced. Astra and Corsa are our most common Vauxhalls.',
            },
            {
                question: 'Can you replace Vauxhall keys if I lost all keys?',
                answer: 'Yes, Vauxhall all-keys-lost uses OBD or EEPROM access depending on year. Generally straightforward compared to German brands.',
            },
            {
                question: 'How long does Vauxhall key programming take?',
                answer: 'Vauxhall keys take 15-40 minutes. Programming is relatively quick and reliable via OBD diagnostic port.',
            },
            {
                question: 'Can you program Vauxhall proximity keys?',
                answer: 'Yes, newer Vauxhall models with keyless entry are programmed including smart key pairing and push-button start.',
            },
            {
                question: 'What Vauxhall models do you work on?',
                answer: 'All Vauxhall: Corsa, Astra, Insignia, Mokka, Crossland, Grandland, Combo, Vivaro, Movano vans, and older models like Vectra, Zafira.',
            },
            {
                question: 'Can you cut Vauxhall key blades?',
                answer: 'Yes, Vauxhall key profiles (HU100, HU43) are cut precisely. Many Vauxhalls use flip keys with retractable blades.',
            },
            {
                question: 'Do you service Vauxhall commercial vans?',
                answer: 'Yes, Vauxhall Combo, Vivaro, Movano vans are serviced regularly for commercial fleet operators and trade businesses.',
            },
        ],
    },
    {
        category: 'Manchester Location Questions',
        slug: 'manchester-locations',
        faqs: [
            {
                question: 'Do you cover Manchester City Centre?',
                answer: 'Yes, we cover all Manchester City Centre postcodes M1, M2, M3, M4 including Northern Quarter, Spinningfields, Deansgate, and Piccadilly. Response time 20-30 minutes.',
            },
            {
                question: 'Can you come to Salford Quays?',
                answer: 'Yes, we service Salford Quays, MediaCityUK, Lowry, Trafford areas. Popular for lockouts at apartment car parks and shopping areas.',
            },
            {
                question: 'Do you service Didsbury?',
                answer: 'Yes, Didsbury (West Didsbury, East Didsbury, M20) is covered with 30-45 minute response times. Common area for residential call-outs.',
            },
            {
                question: 'Can you come to Chorlton?',
                answer: 'Yes, Chorlton-cum-Hardy (M21) is serviced regularly. We cover Chorlton Park, Chorlton Village, and surrounding residential areas.',
            },
            {
                question: 'Do you cover Stockport?',
                answer: 'Yes, Stockport town and all SK postcodes are covered as part of Greater Manchester service area. Response time 45-75 minutes.',
            },
            {
                question: 'Can you service Tameside and Hyde?',
                answer: 'Yes, Tameside boroughs including Hyde, Ashton-under-Lyne, Dukinfield, Denton are covered. Response time 45-75 minutes from central Manchester.',
            },
            {
                question: 'Do you come to Bolton?',
                answer: 'Yes, Bolton BL postcodes are covered. Slightly longer response times (60-90 minutes) due to distance from Manchester centre.',
            },
            {
                question: 'Can you service Oldham?',
                answer: 'Yes, Oldham OL postcodes are covered including Oldham town centre and surrounding areas. Response time 50-80 minutes.',
            },
            {
                question: 'Do you cover Manchester Airport?',
                answer: 'Yes, Manchester Airport terminals, official parking, and meet-and-greet car parks are serviced. Very common for lost key situations after travel.',
            },
            {
                question: 'Can you come to the Trafford Centre?',
                answer: 'Yes, Trafford Centre multi-storey car parks and surrounding Trafford Park area are serviced regularly. Our vans access multi-storey levels.',
            },
            {
                question: 'Do you service Withington?',
                answer: 'Yes, Withington (M20) including student areas near universities is covered. Common area for lockouts and lost keys.',
            },
            {
                question: 'Can you come to Fallowfield?',
                answer: 'Yes, Fallowfield (M14) student area is serviced regularly. High demand for emergency lockouts and affordable key services.',
            },
            {
                question: 'Do you cover Stretford?',
                answer: 'Yes, Stretford (M32) including Old Trafford area near the football stadium is covered. Response time 30-50 minutes.',
            },
            {
                question: 'Can you service Altrincham?',
                answer: 'Yes, Altrincham WA14, WA15 in Trafford borough is covered. Slightly longer response times due to location south of city.',
            },
            {
                question: 'Do you cover the M60 motorway corridor?',
                answer: 'Yes, we service areas along the M60 orbital motorway. Cannot attend live motorway lanes but can attend service stations and slip roads.',
            },
            {
                question: 'Can you come to Rochdale?',
                answer: 'Yes, Rochdale OL11, OL12 postcodes are covered but at the edge of our service area. Response times 70-100 minutes.',
            },
            {
                question: 'Do you service Wigan?',
                answer: 'Wigan WN postcodes are at the border of our coverage area. We can attend for emergency situations but response times are 80-100 minutes.',
            },
            {
                question: 'Can you come to Salford (city)?',
                answer: 'Yes, Salford M5, M6, M7 postcodes are covered with fast response times 25-40 minutes. Salford is adjacent to Manchester centre.',
            },
            {
                question: 'Do you cover Cheetham Hill?',
                answer: 'Yes, Cheetham Hill (M8) is covered with 25-40 minute response times. Common area for residential and commercial call-outs.',
            },
            {
                question: 'Can you service Moss Side and Hulme?',
                answer: 'Yes, Moss Side and Hulme (M15) are covered with fast response times 20-35 minutes due to proximity to city centre.',
            },
            {
                question: 'Do you come to Ardwick and Longsight?',
                answer: 'Yes, Ardwick (M12) and Longsight (M13) are covered with 25-40 minute response times. Regular service areas.',
            },
            {
                question: 'Can you service Rusholme and Levenshulme?',
                answer: 'Yes, Rusholme (M14) and Levenshulme (M19) including curry mile area are covered. Response time 30-45 minutes.',
            },
            {
                question: 'Do you cover Ancoats and New Islington?',
                answer: 'Yes, Ancoats and New Islington (M4) near city centre are covered with very fast 20-30 minute response times.',
            },
            {
                question: 'Can you come to Castlefield?',
                answer: 'Yes, Castlefield (M15) canal-side area near Deansgate is covered with 20-30 minute city centre response times.',
            },
            {
                question: 'Do you service student accommodation areas?',
                answer: 'Yes, we service all student areas near University of Manchester and Manchester Met including Fallowfield, Withington, Rusholme, and city centre student apartments.',
            },
            {
                question: 'Can you come to business parks?',
                answer: 'Yes, we service Trafford Park business park, Airport City, Wythenshawe business areas, and all commercial zones across Greater Manchester.',
            },
            {
                question: 'Do you cover hospitals and medical centers?',
                answer: 'Yes, we service Manchester Royal Infirmary, Wythenshawe Hospital, North Manchester General, and other NHS facilities across the region.',
            },
            {
                question: 'Can you service hotels in Manchester?',
                answer: 'Yes, we regularly service hotels across Manchester for guests and staff who lock keys in vehicles. Common at city centre and airport hotels.',
            },
            {
                question: 'Do you come to shopping centres?',
                answer: 'Yes, we service Arndale Centre, Trafford Centre, Printworks, and all shopping centre car parks across Manchester.',
            },
            {
                question: 'Can you service residential streets with permit parking?',
                answer: 'Yes, we service all residential areas including permit parking zones. We carry documentation to justify emergency attendance.',
            },
            {
                question: 'Do you cover Manchester suburbs?',
                answer: 'Yes, all Manchester suburbs and Greater Manchester boroughs are covered: Bury, Rochdale, Oldham, Tameside, Stockport, Trafford, Salford, Bolton, Wigan.',
            },
            {
                question: 'Can you come to sports venues?',
                answer: 'Yes, we service Old Trafford football stadium, Etihad Stadium, Emirates Old Trafford cricket ground, and other sports venues.',
            },
            {
                question: 'Do you service train station car parks?',
                answer: 'Yes, Manchester Piccadilly, Victoria, Oxford Road, and other train station car parks are serviced regularly for stranded travelers.',
            },
            {
                question: 'Can you come to concert venues?',
                answer: 'Yes, we service Manchester Arena, O2 Apollo, Academy venues, and outdoor event spaces. Common after concerts and events.',
            },
            {
                question: 'Do you cover M61, M62, M56 motorway areas?',
                answer: 'We cover areas near M61 (Bolton), M62 (east-west), M56 (airport) motorways but cannot attend live lanes. Service stations and off-motorway locations only.',
            },
            {
                question: 'Can you service gated communities?',
                answer: 'Yes, we service gated apartment buildings, secure parking, and private estates. Provide gate codes or resident authorization when booking.',
            },
            {
                question: 'Do you come to industrial estates?',
                answer: 'Yes, we service industrial estates, warehouses, and commercial zones including 24-hour shift work locations.',
            },
            {
                question: 'Can you service Saddleworth and High Peak areas?',
                answer: 'These areas (OL3, SK23) are at the border of our coverage. We can attend emergencies but expect 90-120 minute response times.',
            },
            {
                question: 'Do you cover all M1-M99 postcodes?',
                answer: 'Yes, we aim to cover all Manchester M postcodes from M1 (city centre) to M99 (outlying areas). Response times increase with distance from centre.',
            },
            {
                question: 'Can you give exact response times for my postcode?',
                answer: `Yes, call ${SITE_CONFIG.phoneDisplay} with your exact postcode and current location. Our dispatcher provides accurate ETA based on technician location and traffic.`,
            },
            {
                question: 'Do you prioritize certain Manchester areas?',
                answer: 'We prioritize based on emergency severity, not location. However, city centre and high-density areas naturally have faster response due to proximity.',
            },
            {
                question: 'Can you service areas outside Greater Manchester?',
                answer: 'Our primary area is Greater Manchester. For locations in Cheshire, Lancashire, or Derbyshire borders, call to check if we can attend.',
            },
            {
                question: 'Do you have multiple vans across Manchester?',
                answer: 'Yes, we operate multiple mobile units strategically positioned across Manchester to ensure fastest possible response times.',
            },
            {
                question: 'Can you come to my workplace in Manchester?',
                answer: 'Yes, we service workplaces, office buildings, factories, and commercial premises across all Manchester areas.',
            },
            {
                question: 'Do you service park and ride locations?',
                answer: 'Yes, park and ride facilities, tram stops with parking, and commuter car parks across Manchester are serviced.',
            },
            {
                question: 'Can you come to apartment building car parks?',
                answer: 'Yes, we regularly service apartment underground and surface car parks. Very common in city centre high-rise buildings.',
            },
            {
                question: 'Do you know Manchester roads well?',
                answer: `Yes, our technicians are local to Manchester and know the roads, traffic patterns, and shortcuts. This ensures fastest possible arrival.`,
            },
            {
                question: 'Can you service during Manchester traffic rush hour?',
                answer: 'Yes, but rush hour (7-9 AM, 4-7 PM) affects travel times. We factor traffic into ETA estimates and may dispatch from alternative locations.',
            },
            {
                question: 'Do you service event parking at Old Trafford or Etihad?',
                answer: 'Yes, matchday lockouts at football stadiums are common. Expect high demand and slightly longer waits during major events.',
            },
            {
                question: 'Can you help tourists locked out in Manchester?',
                answer: 'Yes, we regularly help tourists, visitors, and business travelers locked out of rental cars or personal vehicles while visiting Manchester.',
            },
        ],
    },
    {
        category: 'Pricing & Payment',
        slug: 'pricing-payment',
        faqs: [
            {
                question: 'How much does a locksmith cost in Manchester?',
                answer: 'Costs vary: car lockouts £60-120, basic key cutting £80-150, transponder keys £120-250, smart keys £180-400. We provide fixed quotes before dispatch.',
            },
            {
                question: 'Do you provide free quotes?',
                answer: 'Yes, call ${SITE_CONFIG.phoneDisplay} for a free quote. We ask about your car make, model, year, and issue, then provide a fixed price before dispatch.',
            },
            {
                question: 'Are there hidden charges?',
                answer: 'No, our quoted price is the final price. No call-out fees, no weekend premiums, no hidden extras. Transparent pricing always.',
            },
            {
                question: 'Do you charge extra for nights and weekends?',
                answer: 'No, we do not charge premium rates for nights, weekends, bank holidays, or emergency call-outs. Same fixed prices 24/7.',
            },
            {
                question: 'Can I pay by card?',
                answer: 'Yes, we accept all major credit/debit cards (Visa, Mastercard, Amex) via portable card terminals. Also accept contactless and mobile payments.',
            },
            {
                question: 'Do you take cash?',
                answer: 'Yes, cash payment is accepted. We provide proper receipts with company details and VAT information.',
            },
            {
                question: 'Can I get an invoice for expenses?',
                answer: 'Yes, we provide detailed itemized invoices showing company registration, services, parts, labor, and totals for expense claims and insurance.',
            },
            {
                question: 'Do you offer payment plans?',
                answer: 'Payment is required on completion. We do not offer formal payment plans, but discuss financial difficulties with our dispatcher for possible solutions.',
            },
            {
                question: 'Is VAT included in prices?',
                answer: 'Our quotes include all costs. VAT registration status will be indicated on invoices if applicable. No additional VAT added to quoted prices.',
            },
            {
                question: 'Why are you cheaper than dealerships?',
                answer: 'We are mobile locksmiths with lower overheads than dealerships. No expensive showrooms or franchise fees means savings passed to customers.',
            },
            {
                question: 'What if I cannot afford the service?',
                answer: 'Discuss options with our dispatcher. We may offer payment alternatives for genuine hardship, but we cannot provide free services.',
            },
            {
                question: 'Do you price match competitors?',
                answer: 'We aim to offer the best prices in Manchester. If you have a genuine written quote from a licensed competitor, we will try to match or beat it.',
            },
            {
                question: 'Are spare keys cheaper than emergency keys?',
                answer: 'Yes, pre-planned spare key service is cheaper than emergency all-keys-lost situations. We recommend getting spares before emergencies.',
            },
            {
                question: 'Do you charge if you cannot fix the problem?',
                answer: 'If we cannot resolve your issue (very rare), we charge a fair call-out fee, not the full service price. We are honest and transparent.',
            },
            {
                question: 'Can I cancel after receiving a quote?',
                answer: 'Yes, quotes are no-obligation. If you cancel before dispatch, no charges. If technician is en route, a call-out fee may apply.',
            },
            {
                question: 'Do insurance companies cover your services?',
                answer: 'Many UK insurance policies cover locksmith services. Check your policy for key cover or breakdown assistance. We provide invoices for claims.',
            },
            {
                question: 'Can my breakdown cover pay for this?',
                answer: 'Some breakdown services (AA, RAC, Green Flag) include locksmith cover. Check your policy. We can invoice your breakdown provider if covered.',
            },
            {
                question: 'Do you offer discounts?',
                answer: 'We maintain low prices for all customers. While we do not advertise specific discounts, we always aim for the best value.',
            },
            {
                question: 'What if the price is different when you arrive?',
                answer: 'Quoted prices are honored unless you provided incorrect information or we discover additional complexity. We discuss any price changes before proceeding.',
            },
            {
                question: 'Do you charge mileage?',
                answer: 'Mileage is included in our fixed prices for areas within Greater Manchester. Extreme distances outside our area may incur additional travel charges.',
            },
            {
                question: 'Can businesses pay on invoice?',
                answer: 'Yes, registered businesses with company accounts can request invoice payment terms. First-time customers usually pay on completion.',
            },
            {
                question: 'Do you accept Apple Pay and Google Pay?',
                answer: 'Yes, we accept all contactless payment methods including Apple Pay, Google Pay, and Samsung Pay via our card terminals.',
            },
            {
                question: 'What if I need a receipt for work expenses?',
                answer: 'We provide detailed receipts showing date, service description, company registration number, and payment breakdown suitable for expense claims.',
            },
            {
                question: 'Do you charge consultation fees?',
                answer: 'No, telephone consultations and quotes are free. We only charge for actual on-site services or if technician is dispatched and you cancel.',
            },
            {
                question: 'Are there cheaper alternatives to key replacement?',
                answer: 'If you have a spare key elsewhere, we can provide lockout-only service cheaper than full key replacement. Discuss options with dispatcher.',
            },
            {
                question: 'Do you offer fleet discounts?',
                answer: 'Yes, businesses with multiple vehicles or regular key service needs can discuss bulk service agreements and fleet pricing.',
            },
            {
                question: 'What if my card payment fails?',
                answer: 'If card payment fails, we accept alternative cards or cash. We cannot release keys or complete service without payment.',
            },
            {
                question: 'Do you require deposit payments?',
                answer: 'No, we do not require deposits. Payment is due on completion of service. We trust our customers and provide transparent service.',
            },
            {
                question: 'Can I tip the technician?',
                answer: 'Tips are not expected but appreciated if you are happy with exceptional service. All quoted prices are fair without expecting tips.',
            },
            {
                question: 'Do you charge for unsuccessful attempts?',
                answer: 'We are highly experienced with professional equipment. Unsuccessful jobs are extremely rare. If we fail, we charge fairly for time spent.',
            },
            {
                question: 'Are online prices accurate?',
                answer: 'Exact prices require details about your specific vehicle and situation. Online prices are estimates. Call for accurate personalized quotes.',
            },
            {
                question: 'Do you honor old quotes?',
                answer: 'Quotes are valid for a reasonable period (typically 30 days). Prices may change if you wait months between quote and service.',
            },
            {
                question: 'What if I dispute the price?',
                answer: 'We provide upfront quotes to avoid disputes. If you believe charges are unfair, speak to our manager before payment to resolve issues.',
            },
            {
                question: 'Do you charge for advice?',
                answer: 'No, telephone advice is free. We are happy to answer questions, explain options, and provide guidance without obligation.',
            },
            {
                question: 'Can I get a refund if I am unsatisfied?',
                answer: 'We stand behind our work. If there are genuine issues with service quality or key functionality, we will rectify problems or discuss refunds.',
            },
        ],
    },
];

// Generate comprehensive FAQ schema
const allFAQs = faqCategories.flatMap(category => category.faqs);
const faqSchema = generateFAQSchema(allFAQs);

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
]);

export default function FAQPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="min-h-screen">
                <Navbar />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white py-16">
                        <div className="container mx-auto px-4">
                            <div className="max-w-5xl mx-auto text-center">
                                <HelpCircle className="w-16 h-16 mx-auto mb-6 text-[hsl(25,100%,50%)]" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                    Auto Locksmith FAQ - 500+ Questions Answered
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    Comprehensive answers about car locksmith services, key replacement, programming, pricing, and emergency assistance across Manchester. {SITE_CONFIG.siteName} - UK Company {SITE_CONFIG.companyNumber}.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now: {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Table of Contents */}
                    <section className="py-12 bg-white border-b">
                        <div className="container mx-auto px-4">
                            <div className="max-w-5xl mx-auto">
                                <h2 className="text-2xl font-bold mb-6 text-[hsl(220,68%,18%)]">FAQ Categories</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {faqCategories.map((category) => (
                                        <a
                                            key={category.slug}
                                            href={`#${category.slug}`}
                                            className="flex items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <ChevronDown className="w-5 h-5 text-[hsl(25,100%,50%)]" />
                                            <div>
                                                <div className="font-semibold">{category.category}</div>
                                                <div className="text-sm text-gray-600">{category.faqs.length} questions</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Categories */}
                    {faqCategories.map((category, categoryIndex) => (
                        <section
                            key={category.slug}
                            id={category.slug}
                            className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                        >
                            <div className="container mx-auto px-4">
                                <div className="max-w-5xl mx-auto">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(220,68%,18%)]">
                                        {category.category}
                                    </h2>
                                    <div className="space-y-4">
                                        {category.faqs.map((faq, index) => (
                                            <details
                                                key={index}
                                                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[hsl(25,100%,50%)] transition-colors"
                                            >
                                                <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none">
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-lg text-[hsl(220,68%,18%)] group-hover:text-[hsl(25,100%,50%)]">
                                                            {faq.question}
                                                        </h3>
                                                    </div>
                                                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1 transition-transform group-open:rotate-180" />
                                                </summary>
                                                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}

                    {/* CTA Section */}
                    <section className="py-16 bg-gradient-to-br from-[hsl(220,68%,18%)] to-[hsl(220,68%,25%)] text-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Still Have Questions?
                                </h2>
                                <p className="text-xl mb-8 text-gray-200">
                                    Call our expert locksmiths 24/7 for personalized answers and immediate assistance across Manchester.
                                </p>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="inline-flex items-center gap-2 bg-[hsl(25,100%,50%)] hover:bg-[hsl(25,100%,45%)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL {SITE_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Internal Links */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto px-4 text-center">
                            <Link href="/" className="text-blue-600 hover:underline mx-2">Home</Link> |
                            <Link href="/services" className="text-blue-600 hover:underline mx-2">Services</Link> |
                            <Link href="/locations" className="text-blue-600 hover:underline mx-2">Locations</Link> |
                            <Link href="/contact" className="text-blue-600 hover:underline mx-2">Contact</Link>
                        </div>
                    </section>
                </main>

                <Footer />
                <MobileCallButton />
            </div>
        </>
    );
}

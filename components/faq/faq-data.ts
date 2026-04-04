import type { Language } from '@/lib/translations';

export interface FAQ {
  question: string;
  answer: string;
}

const en: FAQ[] = [
  {
    question: 'How do I book a court at Courtyard Pickle?',
    answer:
      'Clicking any "Book" or "Reserve" button on this page takes you to our booking partner\'s secure site, where you can select your preferred date, time, and court at Courtyard Pickle in Da Nang. After finalizing the payment you will receive the confirmation instantly in your email.',
  },
  {
    question: 'How much does it cost to rent a pickleball court in Da Nang?',
    answer:
      'Court rental pricing varies by time slot, ranging from 120k-160k per hour with social play ticket at 50k per section. Courtyard Pickle also offer monthly regular schedule from 100k-140k per hour.'
  },
  {
    question: 'What are your opening hours?',
    answer:
      'Courtyard Pickle Da Nang is open daily from 05:00 to 22:00. Hours may vary on public holidays, please check our booking calendar for live availability.',
  },
  {
    question: 'Where is Courtyard Pickleball located?',
    answer:
      'You can find us at 27 Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng.',
  },
  {
    question: 'Do I need to bring my own pickleball paddle?',
    answer:
      ' Courtyard Pickle provides free paddles and balls for all our players. Just simply show up and play.',
  },
  {
    question: 'Can beginners play at Courtyard Pickleball?',
    answer:
      'Absolutely. We welcome all level of players to Courtyard Pickle, and we are especially proud of our amazing community that always extend a helping hand to beginners.',
  },
  {
    question: 'Do you offer pickleball lessons in Da Nang?',
    answer:
      'Yes, we offer both private and group lessons suitable for all levels and ages at Courtyard Pickle. Lessons can be booked by contacting us directly.',
  },
  {
    question: 'What is your cancellation and refund policy?',
    answer:
      'You can reschedule any booking up to 12 hours in advance at no charge. Cancellations made more than 12 hours before your session are eligible for a full refund. Cancellations within 12 hours are non-refundable.',
  },
  {
    question: 'Is there parking at Courtyard Pickleball in Da Nang?',
    answer:
      'Yes. Dedicated motorcycle parking is available on-site. Car parking is available curbside directly in front of the facility on Dương Thị Xuân Quý.',
  },
  {
    question: 'Can I book pickleball courts for a group or private event?',
    answer:
      'Yes. We accommodate group sessions, corporate events, and private tournaments at Courtyard Pickle, serving Da Nang and surrounding areas. Please contact us at +84 932150006 or message us on Facebook to discuss availability, pricing, and setup.',
  },
  {
    question: 'Can I walk in without a reservation?',
    answer:
      'Walk-ins are welcome when courts are available, but we highly recommend booking in advance to guarantee your slot, especially on weekends.',
  },
];

const vi: FAQ[] = [
  {
    question: 'Làm thế nào để đặt sân tại Courtyard Pickle Đà Nẵng?',
    answer:
      'Chỉ cần nhấp vào bất kỳ nút "Đặt sân" nào trên trang này, bạn sẽ được chuyển đến trang đặt chỗ chính thức của Alobo. Tại đây, bạn có thể chọn ngày, giờ và sân mong muốn tại Courtyard Pickle Đà Nẵng. Sau khi hoàn tất thanh toán, bạn sẽ nhận được email xác nhận ngay lập tức.',
  },
  {
    question: 'Chi phí thuê sân tại Courtyard Pickle là bao nhiêu?',
    answer:
      'Giá thuê sân sẽ thay đổi tùy theo khung giờ, trong khoảng 120k-160k / giờ và 50k/lượt cho vé social. Courtyard Pickle có hỗ trợ đặt lịch định kỳ theo tháng từ 100k-140k / giờ.',
  },
  {
    question: 'Giờ mở cửa của sân là khi nào?',
    answer:
      'Courtyard Pickle Đà Nẵng mở cửa hàng ngày từ 05:00 đến 22:00. Giờ hoạt động có thể thay đổi vào các ngày lễ, xin vui lòng kiểm tra lịch đặt sân để cập nhật tình trạng sân trống thực tế.',
  },
  {
    question: 'Courtyard Pickle nằm ở đâu?',
    answer:
      'Bạn có thể tìm thấy chúng tôi tại số 27 Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng.',
  },
  {
    question: 'Sân có cho thuê vợt ko??',
    answer:
      'Courtyard Pickle cho mượn vợt và bóng miễn phí cho tất cả người chơi. Bạn chỉ cần đến sân và sẵn sàng nhập cuộc.',
  },
  {
    question: 'Người mới bắt đầu có thể chơi tại Courtyard Pickle không?',
    answer:
      'Chắc chắn rồi! Chúng tôi chào mừng người chơi ở mọi cấp độ tại Courtyard Pickle, và chúng tôi đặc biệt tự hào về cộng đồng tuyệt vời của mình luôn giúp đỡ những người mới bắt đầu.',
  },
  {
    question: 'Sân có lớp dạy chơi pickleball không?',
    answer:
      'Có, chúng tôi cung cấp cả lớp học riêng và lớp học nhóm phù hợp với mọi cấp độ và lứa tuổi tại Courtyard Pickle. Bạn có thể tham khảo và đặt lịch bằng cách liên hệ trực tiếp với chúng tôi.',
  },
  {
    question: 'Chính sách hủy sân và hoàn tiền như thế nào?',
    answer:
      'Bạn có thể đổi lịch đặt sân miễn phí trước giờ chơi ít nhất 12 tiếng. Các yêu cầu hủy sân trước 12 tiếng sẽ được hoàn tiền đầy đủ. Các trường hợp hủy trong vòng 12 tiếng trước giờ chơi sẽ không được hoàn tiền.',
  },
  {
    question: 'Courtyard Pickle có chỗ đậu xe không?',
    answer:
      'Chúng tôi có khu vực đậu xe máy rộng rãi tại sân. Đối với ô tô, bạn có thể đậu dọc lề đường ngay phía trước sân trên đường Dương Thị Xuân Quý.',
  },
  {
    question: 'Tôi có thể đặt sân cho nhóm hoặc sự kiện riêng không?',
    answer:
      'Có. Chúng tôi nhận tổ chức các buổi giao lưu nhóm, sự kiện công ty và giải đấu nội bộ tại Courtyard Pickle Đà Nẵng. Vui lòng liên hệ qua số điện thoại +84 932150006 hoặc nhắn tin qua Facebook để thảo luận về lịch trống, mức giá và khâu tổ chức.',
  },
  {
    question: 'Tôi có thể đến chơi mà không cần đặt trước không?',
    answer:
      'Chúng tôi luôn chào đón khách vãng lai nếu còn sân trống. Tuy nhiên, chúng tôi khuyến khích bạn nên đặt sân trước để đảm bảo có chỗ, đặc biệt là vào các ngày cuối tuần.',
  },
];

const faqsByLanguage: Record<Language, FAQ[]> = { en, vi };

export function getFaqs(lang: Language): FAQ[] {
  return faqsByLanguage[lang] ?? faqsByLanguage.en;
}

export const faqs = en;

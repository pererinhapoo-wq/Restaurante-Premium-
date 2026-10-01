export interface Specialty {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  focusAreas: string[];
  protocols: string[];
  diagnosticTech: string[];
  leadDoctor: string;
  doctorRole: string;
  accentColor: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialtyId: string;
  specialtyName: string;
  crm: string;
  rqe?: string;
  bio: string;
  approach: string;
  philosophy: string;
  focus: string[];
  consultationDuration: string;
}

export interface Environment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  acoustic: string;
  lighting: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  author: string;
  authorRole: string;
  content: string[];
  keyTakeaways: string[];
}

export interface AppointmentBooking {
  specialtyId: string;
  doctorId: string;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  notes?: string;
}
